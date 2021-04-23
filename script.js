// get target elements

const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const counterElement = document.querySelector("#counter");
//when plus button on click, increment

incrementButton.onclick = function () {
  counterElement.innerText = parseInt(counterElement.innerText) + 1;
};

decrementButton.onclick = function () {
  counterElement.innerText = parseInt(counterElement.innerText) - 1;
};
