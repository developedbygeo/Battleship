import Player from './Player.js';

export default class Controller {
  constructor() {
    this.playerHuman = new Player('You');
    this.playerAi = new Player('AI');
    this.currentPlayers = [this.playerHuman, this.playerAi];
    this.turn = 0;
    // this.playerTurn = this.currentPlayers[this.turn];
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

  play() {
    if (this.#checkTurn() === this.playerHuman) {
      return this.playerHuman.name;
    } else {
      return this.playerAi.name;
    }
  }
}
