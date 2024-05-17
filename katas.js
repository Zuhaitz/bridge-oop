// Kata 1 - Mayas y Aztecas
class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    this.life = Math.max(this.life - damage, 0);
    console.log("Vida restante: " + this.life);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
  }
}

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
  }
}

let aztec = new Aztec(10, 5);
let maya = new Maya(10, 5);

aztec.drinkNesquik();
maya.drinkColaCao();

aztec.defend(maya.attack());
maya.defend(aztec.attack());
