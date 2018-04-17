const ChessBoard = require("./ChessBoard");
const Player = require("./Player");

class Game {

  constructor (user1, user2) {
    this.board = new ChessBoard();
    this.Player1 = new Player(user1);
    this.Player2 = new Player(user2);
    this.turn = 0;
  }

  print(channel) {
    this.board.printBoard(channel);
  }

  move (pos1, pos2) {
    var baseVal = 'a'.charCodeAt(0);

    var x1 = pos1.charCodeAt(0);
    var y1 = 8 - parseInt(pos1.charAt(1));
    var x2 = pos2.charCodeAt(0);
    var y2 = 8 - parseInt(pos2.charAt(1));

    x1 = x1 - baseVal;
    x2 = x2 - baseVal;



    console.log(x1);
    console.log(y1);
    console.log(x2);
    console.log(y2);
    
    var points = this.board.movePiece(x1, y1, x2, y2);
    if (points != -1) {
      if (this.turn%2) {
        this.Player1.points += points;
      } else {
        this.Player2.points += points;
      }
      this.turn++;

      return true;
    }

    return false;
  }

}

module.exports = Game;
