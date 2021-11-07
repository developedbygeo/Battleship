import _ from 'lodash';
import Player from './Player.js';

export default class Controller {
  constructor() {
    this.playerHuman = new Player('You');
    this.playerAi = new Player('AI');
    this.currentPlayers = [this.playerHuman, this.playerAi];
    this.turn = 0;
    this.gameOver = false;
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
  randomAI() {
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
  // AiAttack(pastSelection, shipGuess = null){}
}
