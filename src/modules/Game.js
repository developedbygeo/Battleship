/* eslint-disable class-methods-use-this */
import { rotateDomShips, generateDomShip, unmarkPlacedShips, markedPlacedShip } from '../Dom/dom-helpers.js';
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
    this.indicate = this.indicateShipPosition.bind(this);
    this.enableShips = this.enableDomShips.bind(this);
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
    this.playerHumanDOMShips.forEach((ship) => ship.addEventListener('click', this.enableShips));
  }

  disableDomShipPlacement() {
    this.playerHumanDOMShips.forEach((ship) => ship.removeEventListener('click', this.enableShips));
  }

  resetSelectedValues() {
    this.currentShipLength = null;
    this.currentShipOrientation = null;
    this.currentShipID = null;
    this.currentShipObj = null;
    this.currentShipDOMObj = null;
  }

  checkGameReady() {
    if (this.playerHuman.areShipsPlaced() === true) {
      this.disableRotateButton();
      this.disableDomShipPlacement();
      unmarkPlacedShips(this.playerHumanDOMShips);
      console.log('READDYYYY');
    }
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
      this.settings.player1.ships[this.currentShipID].setPosition(clickedCoord, this.currentShipOrientation);
      markedPlacedShip(this.currentShipDOMObj);
      this.resetSelectedValues();
      this.checkGameReady();
    }
  }

  allowDomShipPlacement() {
    this.playerHumanDOMPositions.forEach((position) => {
      position.addEventListener('click', this.validate);
    });
  }

  clearUnusedIndications() {
    this.playerHumanDOMPositions.forEach((position) => position.classList.remove('indicate-placement'));
  }

  indicateShipPosition(e) {
    this.clearUnusedIndications();
    if (this.currentShipOrientation === 'horizontal') {
      for (
        let i = parseInt(e.target.dataset.coord);
        i < parseInt(e.target.dataset.coord) + this.currentShipLength;
        i += 1
      ) {
        const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
        if (nextPoint === null) return;
        nextPoint.classList.add('indicate-placement');
      }
    } else {
      for (
        let i = parseInt(e.target.dataset.coord);
        i < parseInt(e.target.dataset.coord) + this.currentShipLength * 10;
        i += 10
      ) {
        const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
        if (nextPoint === null) return;
        nextPoint.classList.add('indicate-placement');
      }
    }
  }

  enableShipIndication() {
    this.playerHumanDOMPositions.forEach((position) => {
      position.addEventListener('mouseover', this.indicate);
    });
  }

  initializePlacement() {
    this.enableRotateButton();
    this.enableDomShipPlacement();
    this.allowDomShipPlacement();
  }

  initializeGame() {}

  // TODO when preparation is finalized, the rotateButton should be disabled;
}
