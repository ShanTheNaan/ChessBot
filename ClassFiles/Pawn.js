class Pawn {

  constructor(suit, x, y) {
    this.points = 1;
    this.suit = suit;
    this.x = x;
    this.y = y;
    this.first = true;
  }

  // Assume x, y in bounds
  // checkMove (board, x, y) {
  //
  //   if (x == 0) {
  //     if (this.y - 2 == y) {
  //       if (first) {
  //         if ((board.objectAtIndex(x, y) == null) && (board.objectAtIndex(x, y-1) == null)) {
  //           return true;
  //         }
  //         return false;
  //       }
  //       return false;
  //     }
  //
  //     if (this.y - 1 == y) {
  //       if (board.objectAtIndex(x, y) == null) {
  //         return true;
  //       }
  //     }
  //   } else {
  //     if (this.y - 1 == y) {
  //       if (this.x + 1 == x) {
  //         if (!board.isSquareEmpty(x, y) && board[x][y].suit != this.suit) {
  //           return true;
  //         }
  //       }
  //       if (this.x - 1 == x) {
  //         if (!board.isSquareEmpty(x, y) && board[x][y].suit != this.suit) {
  //           return true;
  //         }
  //       }
  //     }
  //   }
  //
  //   return false;
  // }

  setPosition (x, y) {
    if (first) this.first = false;
    this.x = x;
    this.y = y;
  }

  moveDiagonal(x, y) {
    var direction = -1;
    var signX = -1;
    if (this.suit == "black") direction = 1;
    if (x > this.x) signX = 1;

    if (board.objectAtIndex(x, y) == null) return false;
    board.moveObject(board.objectAtIndex(this.x, this.y), x, y);

    return true;
  }

}

module.exports = Pawn;
