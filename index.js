// function scope
console.log(text); // undefined
var text = "Value"; // string / number / boolean / array / object / function
if (2 === 2) {
  var text = 10;
}
console.log(text); // avoid => error => initialization (temporal dead zone)
// block scope
let text2 = "Value"; // string / number / boolean / array / object / function
if (2 === 2) {
  let text2 = 10;
}
console.log(text2);

const text3 = "Value"; // string / number / boolean / array / object / function
if (2 === 2) {
  const text3 = 10;
}
console.log(text3);

let t1 = "deepak";
function fun() {
  let t1 = "Kumar";
  if (2 === 2) {
    let t1 = "Vaishnavi";
  }
  console.log(t1);
}
funOne(); // function call

function funOne() {
  console.log("Hello");
} // definition

// string , number , boolean , undefined , Object ( null, array, object, function )

// closures => memorization
function parent() {
  let count = 10;
  return function child() {
    count++;
    console.log(count);
  };
}

console.clear();
let counter = parent();
counter();
counter();
counter();
counter();
