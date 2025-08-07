// dom => document object model
// bom => browser object model (navigation, location, document)
//document.getElementById();// one
//document.getElementsByClassName();// []
//document.getElementsByTagName();//[]

let element = document.querySelector("button"); // single element
// let elementList = document.querySelectorAll();//[]
let h1Element = document.querySelector("#h1-id");
let input = document.querySelector("#input-text");
// id => #id
// class => .class
// element => name
// parent-child => parent > child
// parent-child => parent  child

console.log(element);
element.addEventListener("click", () => {
  //alert("Hello");
  let value = input.value;
  h1Element.innerHTML = value;
  input.value = "";
});
