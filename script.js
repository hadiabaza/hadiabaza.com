// get target elements
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const counterElement = document.querySelector("#counter");
// initialize counter
//when plus button on click, increment
if (localStorage.getItem("count") === null) {
  localStorage.setItem("count", 0);
}
counterElement.innerText = localStorage.getItem("count");

incrementButton.onclick = function () {
  counterElement.innerText = parseInt(counterElement.innerText) + 1;
  localStorage.setItem("count", counterElement.innerText);
};

decrementButton.onclick = function () {
  counterElement.innerText = parseInt(counterElement.innerText) - 1;
  localStorage.setItem("count", counterElement.innerText);
};
