export default class Square {
  constructor() {
    this.state = 0;
  }

  makeMove(player) {
    this.state = player;
  }
}
