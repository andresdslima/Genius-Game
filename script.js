let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green 
// 1 - red 
// 2 - yellow 
// 3 - blue 

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Creates random color order
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Lights up each color
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// Checks if the clicked color order is equal to the random given color order
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        score++;
        alert(`Score: ${score}. \nGreat! Now try the next level...`);
        shuffleOrder();
    }
}

// Function for user interaction (click)
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Function that returns a color
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let gameOver = () => {
    alert(`Score: ${score}. \nGame Over! \nClick in "Ok" to start again...`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Welcome to Genius! \nStarting a new game...');
    score = 0;
    shuffleOrder();
}

// User click events on colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();