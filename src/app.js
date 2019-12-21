export default class Character {
  constructor() {
    this.type = 'Swordsman';
    this.level = 1;
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
    } else {
      throw new Error('A dead character cannot level up');
    }
  }
};
