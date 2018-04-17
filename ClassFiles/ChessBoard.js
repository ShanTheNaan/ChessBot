const Pawn = require("./Pawn.js");
const Bishop = require("./Bishop");
const King = require("./King");
const Queen = require("./Queen");
const Rook = require("./Rook");
const Knight = require("./Knight");

class ChessBoard {

  constructor() {
    this.board = new Array(8);
    this.darkSquare = "<:DS:434809511447101511>";
    this.lightSquare = "<:LS:434809161310666763>";

    for (var i=0; i < 8; i++) {
      this.board[i] = new Array(8);
      for (var j=0; j < 8; j++) {
          if ((j+i)%2) {
            this.board[i][j] = 0;
          } else {
            this.board[i][j] = 1;
          }
      }
    }

    for (var i=0; i < 8; i++) {
      this.board[1][i] = new Pawn("black", i, 1, "<:DBP:434827925506883594>", "<:LBP:434827925536112640>");
      this.board[6][i] = new Pawn("white", i, 6, "<:DWP:434822063241560084>", "<:LWP:434822063266725903>");
    }

    this.board[0][0] = new Rook ("black", 0, 0, "<:DBR:434825910965764097>", "<:LBR:434825911125147659>");
    this.board[0][1] = new Knight ("black", 1, 0, "<:DBN:434827326308483073>", "<:LBN:434827326589501451>");
    this.board[0][2] = new Bishop ("black", 2, 0, "<:DBB:434826494548901899>", "<:LBB:434826494456365057>");
    this.board[0][3] = new Queen ("black", 3, 0, "<:DBQ:434825128686387232>", "<:LBQ:434825128879194123>");
    this.board[0][4] = new King ("black", 4, 0, "<:DBK:434823452990504983>", "<:LBK:434823452726263820>");
    this.board[0][7] = new Rook ("black", 7, 0, "<:DBR:434825910965764097>", "<:LBR:434825911125147659>");
    this.board[0][6] = new Knight ("black", 6, 0, "<:DBN:434827326308483073>", "<:LBN:434827326589501451>");
    this.board[0][5] = new Bishop ("black", 5, 0, "<:DBB:434826494548901899>", "<:LBB:434826494456365057>");

    this.board[7][0] = new Rook ("white", 0, 7, "<:DWR:434817359660711956>", "<:LWR:434817359673425930>");
    this.board[7][1] = new Knight ("white", 1, 7, "<:DWN:434819164276785162>", " <:LWN:434819164272721920>");
    this.board[7][2] = new Bishop ("white", 2, 7, "<:DWB:434818235968520202>", "<:LWB:434818235624587275>");
    this.board[7][3] = new Queen ("white", 3, 7, "<:DWQ:435654528424083476>", "<:LWQ:434811365501304842>");
    this.board[7][4] = new King ("white", 4, 7, "<:DWK:434816122248757248>", "<:LWK:434815913498378270>");
    this.board[7][7] = new Rook ("white", 7, 7, "<:DWR:434817359660711956>", "<:LWR:434817359673425930>");
    this.board[7][6] = new Knight ("white", 6, 7, "<:DWN:434819164276785162>", " <:LWN:434819164272721920>");
    this.board[7][5] = new Bishop ("white", 5, 7, "<:DWB:434818235968520202>", "<:LWB:434818235624587275>");

  }

  printBoard(channel) {
    var line = "";

    for (var i=0; i < 8; i++) {
      for (var j=0; j < 8 ; j++) {
        if (this.board[i][j] == 0) {
          line += this.lightSquare;
        } else if (this.board[i][j] == 1) {
          line += this.darkSquare;
        } else {
          var temp = this.objectAtIndex(j, i);
          var num = (temp.x + temp.y)%2;
          if (num) {
            line += temp.darkID;
          } else {
            line += temp.lightID;
          }
        }
      }

      line += "\n";
      channel.send(line);
      line = "";
    }
  }

  objectAtIndex(y, x) {
    if (this.board[x][y] == 0 || this.board[x][y] == 1) return null;
    return this.board[x][y];
  }

  isPathEmpty (x1, y1, x2, y2) {
    var signX = -1;
    var signY = -1;
    if (x2 > x1) signX = 1;
    if (y2 > y1) signY = 1;

    if (x1 == x2) {
      for (var i=1; i < Math.abs(y2-y1); i++) {
        if (this.objectAtIndex(i*signY, x1) != null) return false;
      }
      return true;
    } else {
      for (var i=1; i < Math.abs(x2-x1); i++) {
        if (this.objectAtIndex((signY*i)+y1, (signX*i), +x1) != null) return false
      }
        return true;
    }
  }

  movePiece(x1, y1, x2, y2) {
    var piece = this.objectAtIndex(x1, y1);

    if (piece != null) {
      if (piece.checkMove(this, x2, y2)) {
        if (this.objectAtIndex(x2, y2) != null) {
          var retVal = this.takePiece(x2, y2);
        }
        this.board[y2][x2] = this.board[y1][x1];
        this.board[y1][x1] = (x1+y1+1)%2;
        
        if (this.checkCheck()) {
          this.board[y1][x1] = this.board[y2][x2];
          return -1;
        } else {
          piece.x = x2;
          piece.y = y2;
          return 0;
        }
      }
    }

    return -1;
  }

  takePiece(x, y) {
    var temp = this.objectAtIndex(y, x);
    if (temp != null) {
      this.board[y][x] = -1;
      return temp.points;
    }
  }

  checkCheck() {
    return false;
  }

}

module.exports = ChessBoard;
