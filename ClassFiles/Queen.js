class Queen {

  constructor(suit, x, y, darkID, lightID) {
    this.points = 10;
    this.suit = suit;
    this.x = x;
    this.y = y;
    this.darkID = darkID;
    this.lightID = lightID;
  }

  checkMove (board, x, y) {
    if (this.x == x) {
      if (this.checkVertical(board, x, y)) return true;
    } else if (this.y == y) {
        if (this.checkHorizontal(board, x, y)) return true;
    } else {
      if (this.checkDiagonal(board, x, y)) return true;
    }

    return false;
  }

  checkDiagonal (board, x, y) {
    var signX = -1;
    var signY = -1;
    if (x > this.x) signX = 1;
    if (y > this.y) signY = 1;

    var distance = Math.abs(this.x-x);
    var obj = board.objectAtIndex(x, y);
    if ((this.x + (distance*signX) == x) && (this.y + (distance*signY) == y)) {
        if (board.isPathEmpty(this.x, this.y, x, y)) {
          if (obj == null) {
            return true;
          } else {
            if (obj.suit != this.suit) return true;
          }
        }
    }

    return false;
  }

  checkVertical (board, x, y) {
    var signY = -1;
    if (y > this.y) signY = 1;

    var distance = Math.abs(this.y-y);
    var obj = board.objectAtIndex(x, y);
    if (this.y + distance*signY == y) {
      if (board.isPathEmpty(this.x, this.y, x, y)) {
        if (obj == null) {
          return true;
        } else {
          if (obj.suit != this.suit) return true;
        }
      }
    }

    return false;
  }

  checkHorizontal (board, x, y) {
    var signX = -1;
    if (x > this.x) signX = 1;

    var distance = Math.abs(this.x-x);
    var obj = board.objectAtIndex(x, y);
    if (this.x + distance*signX == x) {
      if (board.isPathEmpty(this.x, this.y, x, y)){
        if (obj == null) {
          return true;
        } else {
          if (obj.suit != this.suit) return true;
        }
      }
    }

    return false;
  }

}

module.exports = Queen;
