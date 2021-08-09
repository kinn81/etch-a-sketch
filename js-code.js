const mainCanvas = document.querySelector('div[data-key="mainCanvas"]');
const boardSize = 700;
let rowsColumns = 20;
let mouseClicked = 0;

drawBoard(rowsColumns);
mainCanvas.style.gridTemplateRows = `repeat(${rowsColumns}, ${boardSize / rowsColumns}px)`;
mainCanvas.style.gridTemplateColumns = `repeat(${rowsColumns}, ${boardSize / rowsColumns}px)`;

function changeBoardSize(size) {
    rowsColumns = size;
    drawBoard(size);
    mainCanvas.style.gridTemplateRows = `repeat(${size}, ${boardSize / size}px)`;
    mainCanvas.style.gridTemplateColumns = `repeat(${size}, ${boardSize / size}px)`;
}

function drawBoard(number) {
    mainCanvas.innerHTML = "";
    for (let i = 1; i <= number * number; i++) {
        let tempDiv = document.createElement('div');
        tempDiv.style.border = '.2px solid gray';
        tempDiv.addEventListener('mouseenter', colorChangeHover);
        tempDiv.addEventListener('mousedown', colorChangeClick);
        tempDiv.ondragstart = function () { return false; };
        mainCanvas.appendChild(tempDiv);
    }
}

function colorChangeClick(e) {
    mouseClicked = 1;
    e.target.style.backgroundColor = 'black';
}

function colorChangeHover(e) {
    if (e.buttons > 0) {
        e.target.style.backgroundColor = 'black';
    }
}

function resetBoard() {
    changeBoardSize(rowsColumns);
}