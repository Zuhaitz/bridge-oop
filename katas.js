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

// Kata 2 - Il sogno di volare
class Gallery {
  constructor(civil, militar) {
    this.civil = civil;
    this.militar = militar;
  }

  getRandomCivil() {
    return this.civil[Math.floor(Math.random * this.civil.length)];
  }

  getRandomMilitar() {
    return this.militar[Math.floor(Math.random * this.militar.length)];
  }

  getAll() {
    return this.civil.concat(this.militar);
  }
}

class Painter {
  constructor() {
    createGallery();
  }

  createGallery() {
    let section = document.createElement("section");
    document.getElementsByTagName("body")[0].appendChild(section);
    this.gallery = section;
  }

  createImageTag(url) {
    let pic = document.createElement("picture");
    let img = document.createElement("img");
    img.setAttribute("src", url);
    pic.appendChild(img);

    return pic;
  }

  paintSingleImage(url) {
    this.gallery.appendChild(this.createImageTag(url));
  }

  paintMultipleImages(images) {
    images.forEach((img) => this.gallery.appendChild(this.createImageTag(img)));
  }
}
