import Daemon from './daemon';

export default class Magician extends Daemon {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}
