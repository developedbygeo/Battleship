/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import Player from './Player.js';
import { colorCell, sunkShip, handleStatus } from '../Dom/dom-helpers.js';
import { findValidXY, filterAttackedCells, findEnemyDirection } from './ai-helpers.js';

export default class Controller {
  constructor() {
    this.turn = 0;
    this.player1 = new Player('You');
    this.player2 = new Player('Ai');
    this.players = [this.player1, this.player2];
    this.currentPlayer = this.players[this.turn];
  }

  findActivePlayer() {
    this.currentPlayer = this.players[this.turn];
  }

  findInactivePlayer = () => this.players.find((player) => player !== this.findActivePlayer());

  getCurrentPlayerTurn = () => this.turn;

  handleTurn() {
    if (this.turn === 0) {
      this.turn += 1;
    } else {
      this.turn = 0;
    }
  }

  turnDefault() {
    this.turn = 0;
  }

  handleBoards() {
    if (this.getCurrentPlayerTurn() === 0) {
      this.player1.disableDomBoard();
      this.player1.getDomBoard().classList.add('board-turn');
      this.player2.enableDomBoard();
      this.player2.getDomBoard().classList.remove('board-turn');
    } else {
      this.player1.enableDomBoard();
      this.player1.getDomBoard().classList.remove('board-turn');
      this.player2.disableDomBoard();
      this.player2.getDomBoard().classList.add('board-turn');
    }
  }

  turnComplete() {
    this.handleTurn();
    this.findActivePlayer();
    this.handleBoards();
  }

  isGameOver(player) {
    return player.board.remainingShips() === 0;
  }

  gameOver() {
    this.turnDefault();
    this.player1.disableDomBoard();
    this.player2.disableDomBoard();
    handleStatus(
      'error-wrapper',
      'error-title-header',
      'Game Over',
      'error-message-p',
      `${this.currentPlayer.name} won!`
    );
  }

  handlePossibleSunk(ship, player) {
    const receivingPlayer = player === this.player1 ? 'you' : 'ai';
    const shipStatus = ship.hasShipSunk();
    if (shipStatus) sunkShip(receivingPlayer, ship.shipName, true);
  }

  action = (e, player) =>
    new Promise((resolve) => {
      const hitSuccess = player.board.handleAttack(parseInt(e.target.dataset.coord));
      if (hitSuccess.length === 0) {
        colorCell(e.target, false);
      } else {
        colorCell(e.target, true);
        this.handlePossibleSunk(hitSuccess[0], player);
      }
      resolve();
    });

  // AI-specific

  selectRandomCell() {
    const availableCells = this.player1.board.remainingUnoccupiedCells();
    const randomChoice = _.random(0, availableCells.length);
    return availableCells[randomChoice];
  }

  cpuHandleCell(prev, orientation = null) {
    let availableCells;
    const previousCell = parseInt(prev);
    if (orientation === 'vertical') {
      availableCells = findValidXY(previousCell) !== 'nope' ? findValidXY(previousCell, 'vertical') : undefined;
    } else if (orientation === 'horizontal') {
      availableCells =
        findValidXY(previousCell, 'horizontal') !== 'nope' ? findValidXY(previousCell, 'horizontal') : undefined;
    } else {
      availableCells = findValidXY(previousCell, 'unavailable');
    }
    const coordsToBeAttacked = this.player1.board.attackedCoordinates();
    const availCellOptions = filterAttackedCells(availableCells, coordsToBeAttacked);
    if (availCellOptions === undefined) return undefined;
    return availCellOptions[_.random(0, availCellOptions.length)];
  }

  // Game flow

  // checks for possible gameOver and if not, completes the turn
  handlePossibleGameOver(player) {
    if (this.isGameOver(player)) {
      this.gameOver();
    } else {
      this.turnComplete();
    }
  }

  gameOn() {
    let prev = this.selectRandomCell();
    let prevShotResult = [];
    const hitsOnTarget = [];
    let liveTarget = null;
    document.querySelector('.board-ai').addEventListener('click', (e) => {
      if (!e.target.parentElement.classList.contains('board-inactive')) {
        const play = this.action(e, this.player2);
        play
          .then(() => {
            this.handlePossibleGameOver(this.player2);
          })
          .then(() => {
            let curr;
            if (prevShotResult.length !== 0) {
              if (hitsOnTarget.length > 1) {
                if (findEnemyDirection(hitsOnTarget) === 'horizontal') {
                  curr =
                    this.cpuHandleCell(prev, 'horizontal') !== undefined
                      ? this.cpuHandleCell(prev, 'horizontal')
                      : this.cpuHandleCell(hitsOnTarget[0], 'horizontal');
                } else {
                  curr =
                    this.cpuHandleCell(prev, 'vertical') !== undefined
                      ? this.cpuHandleCell(prev, 'vertical')
                      : this.cpuHandleCell(hitsOnTarget[0], 'vertical');
                }
              } else {
                curr = this.cpuHandleCell(prev);
              }
            } else if (prevShotResult.length === 0 && hitsOnTarget.length !== 0) {
              if (hitsOnTarget.length > 1) {
                if (findEnemyDirection(hitsOnTarget) === 'horizontal') {
                  curr =
                    this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'horizontal') !== undefined
                      ? this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'horizontal')
                      : this.cpuHandleCell(hitsOnTarget[0], 'horizontal');
                } else {
                  curr =
                    this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'vertical') !== undefined
                      ? this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'vertical')
                      : this.cpuHandleCell(hitsOnTarget[0], 'vertical');
                }
              } else {
                curr =
                  this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1]) !== undefined
                    ? this.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1])
                    : this.cpuHandleCell(hitsOnTarget[0]);
              }
            } else {
              curr = this.selectRandomCell();
            }
            if (curr === undefined) curr = this.selectRandomCell();
            prev = curr;
            prevShotResult = this.player1.board.handleAttack(parseInt(curr));
            if (liveTarget !== null && prevShotResult[0] !== liveTarget && prevShotResult.length !== 0) {
              [liveTarget] = prevShotResult;
              hitsOnTarget.length = 0;
            }
            if (prevShotResult.length !== 0) {
              [liveTarget] = prevShotResult;
            }

            if (prevShotResult.length === 0) {
              colorCell(document.querySelector(`.board-you [data-coord="${curr}"]`), false);
            } else {
              colorCell(document.querySelector(`.board-you [data-coord='${curr}']`), true);
              if (prevShotResult[0].hasShipSunk()) {
                const { shipName } = prevShotResult[0];
                sunkShip(this.player1.name, `${shipName}`, true);
                prevShotResult.length = 0;
                hitsOnTarget.length = 0;
                liveTarget = null;
              } else {
                hitsOnTarget.push(curr);
              }
            }
            document.querySelector('.board-ai').classList.remove('hit');
            document.querySelector('.board-ai').classList.remove('miss');
            this.handlePossibleGameOver(this.player1);
          })
          .catch((err) => handleStatus('error-wrapper', 'error-title-header', 'Oops', 'error-message-p', `${err}!`));
      }
    });
  }

  gameInit() {
    this.player2.positionAiShips();
    this.turnDefault();
    this.findActivePlayer();
    this.handleBoards();
    this.gameOn();
  }
}
