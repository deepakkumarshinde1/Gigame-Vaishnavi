console.log("hi");
setTimeout(() => {
  console.log("hello");
}, 0);
let count = 5;
let intervalId = setInterval(() => {
  count--;
  if (count == 0) {
    clearInterval(intervalId);
  }

  console.log("Hello");
}, 1000);
console.log("hey");

async function div(a, b) {
  if (b === 0) {
    return Promise.reject("Cant divide a number by zero");
  } else {
    return Promise.resolve(a / b);
  }
} // definition

div(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); // call

// async await
async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    if (data.status === 200) {
      console.log("ok");
    } else {
      throw new Error("Server Issue, try again.");
    }
  } catch (error) {}
}

function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

let composition = function (fun1, fun2, a, b) {
  return fun1(fun2(a, b), b);
};

let a = 2;
let b = 5;

composition(add, multi, a, b);
composition(multi, add, a, b);
composition(multi, multi, a, b);
composition(add, add, a, b);
