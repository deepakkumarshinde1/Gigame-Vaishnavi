class Student {
  sessionOut() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
    }, 2000);
  }
}

let student = new Student();
student.sessionOut();

let array = [1, 2, 3, 4, 5, 6];
let [a, b, ...arr] = array;

class Human {
  constructor(_name) {
    this.name = _name;
  }
  printName() {
    console.log(this.name);
  }
}

class Name extends Human {
  constructor(_name) {
    super(_name);
    this.name = "name";
  }

  printName() {
    super.printName();
    console.log(this.name);
  }
}

let human = new Name("Vaishnavi");
human.printName();
