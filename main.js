class Person {
  constructor(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;
  }

  obtDetails() {
    console.log(
      `Nombre: ${this.name}\nEdad: ${this.age}\nGenero: ${this.genre}`
    );
  }
}

let p = new Person("Jeffry", 22, "Male");
p.obtDetails();

class Student extends Person {
  constructor(name, age, genre, course, group) {
    super(name, age, genre);
    this.course = course;
    this.group = group;
  }

  register() {
    console.log(this.name, this.age, this.genre, this.course, this.group);
  }
}

let student = new Student("Jeffry", 22, "Male", "Mates", "A2");
student.register();

class Teacher extends Person {
  constructor(name, age, genre, subject, level) {
    super(name, age, genre);
    this.subject = subject;
    this.level = level;
  }

  assign() {
    console.log(this.name, this.age, this.genre, this.subject, this.level);
  }
}

let teacher = new Teacher("Manolo", 48, "Male", "Filosofía", "Nivel 3");
teacher.assign();
