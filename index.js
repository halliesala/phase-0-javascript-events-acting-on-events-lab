// Your code here
const SPEED = 10

const dodger = document.getElementById("dodger");
const game = document.querySelector("div#game");
const gameHeight = game.offsetHeight;
const gameWidth = game.offsetWidth;

// Initial color & location
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px"

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*document.addEventListener("keydown", function (event) {
    console.log(event);
})

document.addEventListener("click", function (event) {
    console.log(event);
})*/

document.addEventListener("click", function (event) {
    console.log(event)
    dodger.style.backgroundColor = getRandomColor();
})

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowLeft":
            moveDodgerLeft();
            break;
        case "ArrowRight":
            moveDodgerRight();
            break;
        case "ArrowUp":
            moveDodgerUp();
            break;
        case "ArrowDown":
            moveDodgerDown();
            break;
    }
})



function getNewPx(element, dim='x', step=SPEED) {
    const parsedLoc = parseInt(element.replace("px", ""));
    const newLoc = parsedLoc + step;
    if (isOnBoard(newLoc, dim)) {
        return `${parsedLoc + step}px`;
    }
    else {
        console.log("Off board");
        return element;
    }
}

function isOnBoard(num, dim ='x') {
    if (dim === 'x') {
        return (num >= 0 && num <= 360);
    }
    else if (dim === 'y') {
        return (num >= 0 && num <= 380);
    }
}

function moveDodgerLeft() {
    dodger.style.left = getNewPx(dodger.style.left, 'x', -1 * SPEED);

}

function moveDodgerUp() {
    dodger.style.bottom = getNewPx(dodger.style.bottom, 'y', SPEED);
}

function moveDodgerRight() {
    dodger.style.left = getNewPx(dodger.style.left, 'x', SPEED);
}

function moveDodgerDown() {
    dodger.style.bottom = getNewPx(dodger.style.bottom, 'y', -1 * SPEED)
}