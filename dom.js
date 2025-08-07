let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
parent.addEventListener("click", () => {
  console.log("parent clicked");
});

child.addEventListener("click", (event) => {
  console.log("child clicked");
  event.stopPropagation();
});

let button = document.querySelector("button[type='submit']");
button.addEventListener("click", (event) => {
  event.preventDefault();

  // validation
  if (validation === false) {
    alert("Some fields are not valid");
    return false;
  }
});
