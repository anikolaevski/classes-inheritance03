export class Character {
  constructor(obj) {
    this.name = obj.name;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = 5;
    this.defense = 5;
    this.powerMode = false;
    this.powerModeCounter = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    }
  }

  set powerMode (val) {
    if (val) {
      this.powerModeCounter = 3;
      this.attack *= 2;
      this.defense *= 2;
      this.health *= 2;      
    }
  }

  doAttack() {
    if (this.powerModeCounter > 0) {
      this.powerModeCounter -= 1;
    }
    if (this.powerModeCounter === 0) {
      this.powerMode = false;
      this.attack /= 2;
      this.defense /= 2;
      this.health /= 2;
    }
  }
}

export class Bowman extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 25;
    this.defense = 25;
  }
}

export class Swordsman extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 40;
    this.defense = 10;
  }
}

export class Magician extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.defense = 40;
  }
}

export class Undead extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 25;
    this.defense = 25;
  }
}

export class Zombie extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 40;
    this.defense = 10;
  }
}

export class Daemon extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.defense = 40;
  }
}
