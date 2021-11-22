/* eslint-disable class-methods-use-this */
import { rotateDomShips, generateDomShip, markedPlacedShip } from '../Dom/dom-helpers.js';
import Controller from './Controller.js';

export default class Game {
  constructor() {
    this.settings = new Controller();
    this.playerHuman = this.settings.player1;
    this.playerHumanFleet = this.playerHuman.board.existingShips();
    this.playerHumanDOMShips = document.querySelectorAll('.player .ship-cont');
    this.playerHumanDOMPositions = document.querySelectorAll('.board-you .box');
    this.rotateBtn = document.querySelector('.rotate');
    this.playerHumanReady = false;
    this.currentShipLength = null;
    this.currentShipOrientation = null;
    this.currentShipID = null;
    this.currentShipObj = null;
    this.currentShipDOMObj = null;
    this.validate = this.validateDomPlacement.bind(this);
  }

  enableRotateButton() {
    this.rotateBtn.addEventListener('click', rotateDomShips);
  }

  disableRotateButton() {
    this.rotateBtn.removeEventListener('click', rotateDomShips);
  }

  enableDomShips(e) {
    e.target.classList.add('placing-now');
    this.currentShipLength = parseInt(e.target.dataset.length);
    this.currentShipOrientation = e.target.dataset.orientation;
    this.currentShipID = parseInt(e.target.dataset.id);
    this.currentShipObj = this.settings.player1.ships[this.currentShipID];
    this.currentShipDOMObj = e.target;
  }

  enableDomShipPlacement() {
    this.playerHumanDOMShips.forEach((ship) =>
      ship.addEventListener('click', (e) => {
        this.enableDomShips(e);
      })
    );
  }

  resetSelectedValues() {
    this.currentShipLength = null;
    this.currentShipOrientation = null;
    this.currentShipID = null;
    this.currentShipObj = null;
    this.currentShipDOMObj = null;
  }

  validateDomPlacement(e) {
    this.settings.player1.ships[this.currentShipID].orientation = this.currentShipOrientation;
    const clickedCoord = parseInt(e.target.dataset.coord);
    const isRotated = this.currentShipOrientation === 'horizontal';
    if (
      this.playerHuman.board.isPositionValid(
        clickedCoord,
        this.currentShipLength,
        this.currentShipOrientation,
        isRotated
      )
    ) {
      this.playerHuman.board.placeShip(clickedCoord, this.playerHuman.ships[this.currentShipID]);
      generateDomShip(
        this.currentShipObj.shipName,
        this.currentShipOrientation,
        this.currentShipLength,
        parseInt(e.target.dataset.coord)
      );
      markedPlacedShip(this.currentShipDOMObj);
      this.resetSelectedValues();
    }
  }

  allowDomShipPlacement() {
    this.playerHumanDOMPositions.forEach((position) => {
      position.addEventListener('click', this.validate);
    });
  }

  // allowDomShipPlacement() {
  //   this.playerHumanDOMPositions.forEach((position) => {
  //     position.addEventListener('click', validateDomPlacement(this, this.playerHuman));
  //   });
  // }

  // allowDomShipPlacement() {
  //   this.playerHumanDOMPositions.forEach((position) => {
  //     position.addEventListener('click', (e) => {
  //       console.log(this.dataset.coord);
  //       if(this.playerHuman.board.isPositionValid(parseInt(e.target.dataset.coord), this.currentShipLength, this.currentShipOrientation)){
  //         this.playerHuman.board.placeShip(parseInt(e.target.))
  //       }
  //     });
  //   });
  // }

  // TODO when preparation is finalized, the rotateButton should be disabled;
}
