const Pawn = require("./Pawn.js");

class ChessBoard {

  constructor() {
    this.board = new Array(8);

    this.emojis = {
      lightSquare: "<:DS:434809511447101511>",
      darkSquare: "<:LS:434809161310666763>",
      darkWhitePawn: "<:DWP:434822063241560084>",
      lightWhitePawn: "<:LWP:434822063266725903>",
      darkBlackPawn: "<:DBP:434827925506883594>",
      lightBlackPawn: "<:LBP:434827925536112640>"
    }

    for (var i=0; i < 8; i++) {
      this.board[i] = new Array(8);
      for (var j=0; j < 8; j++) {
          if ((j+i)%2 == 0) {
            this.board[i][j] = 0;
          } else {
            this.board[i][j] = 1;
          }
      }
    }

    for (var i=0; i < 8; i++) {
      this.board[i][1] = new Pawn("black", i, 1);
    }
  }

  printBoard(channel) {
    var line ="";

    for (var i=0; i < 8; i++) {
      for (var j=0; j < 8; j++) {
        if (this.board[i][j] == 0) {
          line += this.emojis["lightSquare"];
        } else if (this.board[i][j] == 1) {
          line += this.emojis["darkSquare"];
        } else {
          var temp = objectAtIndex(i, j);
          var num =
        }
      }

      line += "\n";
      channel.send(line);
      line = "";
    }
  }

  objectAtIndex(x, y) {
    if (this.board[x][y] == 0 || this.board[x][y] ==1) return null;
    return this.board[x][y];
  }

  isPathEmpty (x1, y1, x2, y2) {
    var signX = -1;
    var signY = -1;
    if (x2 > x1) signX = 1;
    if (y2 > y1) signY = 1;

    if (x1 == x2) {
      for (var i=1; i < Math.abs(y2-y1); i++) {
        if (this.objectAtIndex(x1, i*signY) != null) return false;
      }
      return true;
    } else {
      for (var i=1; i < Math.abs(x2-x1); i++) {
        if (this.objectAtIndex((signX*i)+x1, (signY*i)+y1) != null) return false
      }
        return true;
    }
  }

  // moveObject(piece, x, y) {
  //   this.board[piece.x][piece.y] =
  //   if(this.objectAtIndex(x, y) != null) {
  //     //
  //   }
  //   this.board[x][y] = piece;
  // }


}

module.exports = ChessBoard;
