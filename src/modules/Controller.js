import _ from 'lodash';
import Player from './Player.js';
import * as AI from './ai-helpers.js';

export default class Controller {
  constructor() {
    this.playerHuman = new Player('You');
    this.playerAi = new Player('AI');
    this.currentPlayers = [this.playerHuman, this.playerAi];
    this.turn = 0;
    this.gameOver = false;
    this.AiShots = [];
  }

  changeTurn() {
    if (this.turn === 0) {
      this.turn += 1;
    } else {
      this.turn = 0;
    }
  }

  #checkTurn() {
    return this.currentPlayers[this.turn];
  }

  findLoserParty() {
    try {
      return this.currentPlayers.find(
        (player) => player.board.shipsAlive() === 0
      ).name;
    } catch {
      throw new Error('Oops, no one has lost yet!');
    }
  }

  play() {
    if (this.#checkTurn() === this.playerHuman && this.gameOver === false) {
      return this.playerHuman.name;
    }
    if (this.#checkTurn() === this.playerAi && this.gameOver === false) {
      return this.playerAi.name;
    }
    return 'Game Over';
  }

  // AI logic
  AIrandom() {
    let selection;
    const availableCells = this.playerHuman.board.remainingCells();
    if (availableCells.length === 1) {
      // eslint-disable-next-line prefer-destructuring
      selection = availableCells[0];
    } else {
      const randomSelection = _.random(0, availableCells.length);
      selection = availableCells[randomSelection];
    }
    return selection;
  }

  AIattack(prevSelection, enemyShipDirection = null) {
    let valid;
    const previous = parseInt(prevSelection);
    if (enemyShipDirection === 'vertical') {
      valid = AI.findValidVertical(previous);
      if (valid === 'nope') return undefined;
    } else if (enemyShipDirection === 'horizontal') {
      valid = AI.findValidHorizontal(previous);
      if (valid === 'nope') return undefined;
    } else {
      valid = AI.findValid(previous);
    }
    // const alreadyAttackedCoords = this.playerHuman.board.attackedCoords;
    const availableChoices = this.playerHuman.board.remainingCells(valid);
    return availableChoices[
      Math.floor(Math.random() * availableChoices.length)
    ];
  }
}
