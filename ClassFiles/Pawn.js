class Pawn {

  constructor(suit, x, y, darkID, lightID) {
    this.points = 1;
    this.suit = suit;
    this.x = x;
    this.y = y;
    this.first = true;
    this.darkID = darkID;
    this.lightID = lightID;
  }


  checkMove (board, x, y) {
    if (x == 0) {
      if (checkVertical(x, y)) return true;
    } else if (Math.abs(x - this.x) == 1) {
      if (checkDiagonal(x, y)) return true;
    }

    return false;
  }

  setPosition (x, y) {
    if (first) this.first = false;
    this.x = x;
    this.y = y;
  }

  checkDiagonal(x, y) {
    var direction = -1;
    var signX = -1;
    if (this.suit == "black") direction = 1;
    if (x > this.x) signX = 1;

    if ((this.y + direction == y) && (this.x + signX == x)) {
      if (board.objectAtIndex(x, y) != null && board.objectAtIndex(x, y).suit != this.suit) return true;
    }

    return false;
  }

  checkVertical (x, y) {
    var direction = -1;
    if (this.suit == "black") direction = 1;

    if (this.y + direction == y) {
      if (board.objectAtIndex == null) return true;
    }

    if (this.y + direction*2 == y) {
      if (this.first && board.isPathEmpty(this.x, this.y, x, y) && board.objectAtIndex(x, y) == null) return true;
    }

    return false;
  }

}

module.exports = Pawn;
