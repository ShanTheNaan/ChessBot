class Bishop {

  constructor(suit, x, y, darkID, lightID) {
    this.points = 3;
    this.suit = suit;
    this.x = x;
    this.y = y;
    this.darkID = darkID;
    this.lightID = lightID;
  }

  checkMove (board, x, y) {
    if (this.x != x) {
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
    if ((this.x + (distance*signX) == x) && (this.y + (distance*signY) == y)) {
        if (board.isPathEmpty(this.x, this.y, x, y)) return true;
    }

    return false;
  }

}

module.exports = Bishop;
