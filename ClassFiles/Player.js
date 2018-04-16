class Player {

  constructor (user) {
    this.user = user;
    this.points = 0;
  }

  getPoints() {
    return this.points;
  }

  getUser() {
    return this.user;
  }

  addPoints(num) {
    this.points += num;
  }
  
}

module.exports = Player;
