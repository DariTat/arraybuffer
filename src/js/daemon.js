export default class Daemon {
  constructor() {
    this.attack = 10;
    this.defence = 40;
  }

  getAttack(n) {
    this.attack *= ((100 - ((n - 1) * 10)) / 100);
    return this.attack;
  }
  getStoned(n) {
    this.attack -= Math.log2(n) * 5;
    return this.attack;
  }
}
