var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.welcome = function () {
        console.log("Hello, and welcome ".concat(this.name, " who is ").concat(this.age, " years old"));
    };
    return User;
}());
var user = new User("deepak", 29);
user.welcome();
console.log(user.name);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.running = function () {
        console.log("running");
    };
    return Animal;
}());
console.clear();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.running = function () {
        _super.prototype.running.call(this);
        console.log("Dog is running");
    };
    Dog.prototype.jumping = function () { };
    Dog.prototype.bark = function () {
        console.log("Dog can bark");
    };
    return Dog;
}(Animal));
var dog = new Dog("somo");
dog.running();
dog.bark();
dog.name = "samee";
console.log(dog.name);
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.square = function (x) {
        return x * x;
    };
    Util.PI = 3.14;
    return Util;
}());
console.log(Util.square(2));
// interface RectAngle extends H, W {
//   result(): number;
// }
// let rectangle: RectAngle = {
//   h: 10,
//   w: 20,
//   result: null,
// };
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.h = h;
        this.w = w;
    }
    Rectangle.prototype.result = function () {
        return this.w * this.h;
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 20);
