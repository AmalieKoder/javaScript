console.log("Hello World");

// Hente HTML element

const plusButton = document.querySelector("#plusButtom");
console.log(plusButton);

const minusButton = document.querySelector("#minusButtom");
console.log(minusButton);

const numberDisplay = document.querySelector("#displayNumber");

const resetButton = document.querySelector("#resetButton");

// Vi må sette opp variabler som rekner

let count = 0;

// Lage funksjoner til knappene

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

// Denne event lytteren tar en allerede laget funksjon som sitt andre parament

plusButton.addEventListener("click", increment);

minusButton.addEventListener("click", decrement);

resetButton.addEventListener("click", reset);