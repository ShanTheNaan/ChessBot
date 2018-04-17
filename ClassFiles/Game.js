const ChessBoard = require("./ChessBoard");
const Player = require("./Player");

class Game {

  constructor (user1, user2) {
    this.board = new ChessBoard();
    this.Player1 = new Player(user1);
    this.Player2 = new Player(user2);
  }

  printBoard(channel) {
    this.board.printBoard(channel);
  }

}

module.exports = Game;
