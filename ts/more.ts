class User {
  readonly name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`Hello, and welcome ${this.name} who is ${this.age} years old`);
  }
}
let user = new User("deepak", 29);
user.welcome();
console.log(user.name);

abstract class Animal {
  running(): void {
    console.log("running");
  }
  abstract jumping(): void;
}

console.clear();
class Dog extends Animal {
  private _name: string;
  constructor(name: string) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  running(): void {
    super.running();
    console.log("Dog is running");
  }
  jumping(): void {}
  bark(): void {
    console.log("Dog can bark");
  }
}

let dog = new Dog("somo");
dog.running();
dog.bark();
dog.name = "samee";
console.log(dog.name);

class Util {
  static PI = 3.14;
  static square(x: number): number {
    return x * x;
  }
}

console.log(Util.square(2));

// interface
interface RectAngle {
  h: number;
}
interface RectAngle {
  w: number;
}
interface RectAngle {
  result(): number;
}

// interface RectAngle extends H, W {
//   result(): number;
// }

// let rectangle: RectAngle = {
//   h: 10,
//   w: 20,
//   result: null,
// };

class Rectangle implements RectAngle {
  h: number;
  w: number;
  constructor(w: number, h: number) {
    this.h = h;
    this.w = w;
  }
  result(): number {
    return this.w * this.h;
  }
}

let rect = new Rectangle(10, 20);

// generics
function useState<V>(value: V): [V, () => V] {
  return [
    value,
    () => {
      return value;
    },
  ];
}

let [value, fun] = useState<number>(10);
useState<string>("deepak");
