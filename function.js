fun(); // run
function fun() {
  console.log("i am a  function");
}
fun(); // run

// function expression
fun2(); // error
let fun2 = function () {
  // there own context (this)
};
fun2(); // run

// arrow function
let fun3 = () => {
  // don't have there own context (this)
};

// callback function
function fun4(callback) {
  let text = "hi";
  callback(text);
}

fun4(function (text_1) {
  console.log(text_1);
});

fun4((text_1) => {
  console.log(text_1);
});

// IFFE
(function (text, text_1) {
  console.log(text, text_1);
})("hello", "hi");
