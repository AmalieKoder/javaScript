console.log("Hello World");

const plusButton = document.querySelector("#plusButtom");
console.log(plusButton);

const minusButton = document.querySelector("#minusButtom");
console.log(minusButton);

const numberDisplay = document.querySelector("#displayNumber");

const resetButton = document.querySelector("#resetButton");


let count = 0;


function increment() {
    count = count + 1;
    console.log(count);
    numberDisplay.textContent = count;
}

function decrement() {
    count = count - 1;
    console.log(count);
    numberDisplay.textContent = count;
}

function reset() {
    count = 0;
    numberDisplay.textContent = count;
}

plusButton.addEventListener("click", increment);

minusButton.addEventListener("click", decrement);

resetButton.addEventListener("click", reset);