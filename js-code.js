const mainCanvas = document.querySelector('div[data-key="mainCanvas"]');
const boardSize = 600;
let rowsColumns = 16;
let mouseDown = 0;

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
        tempDiv.style.border = '.2px solid lightgray'
        tempDiv.addEventListener('mouseenter', colorChangeFunc)
        tempDiv.addEventListener('mousedown', () => { mouseDown = 1 });
        tempDiv.addEventListener('mouseup', () => { mouseDown = 0 });
        mainCanvas.appendChild(tempDiv);
    }
}
function colorChangeFunc(e) {
    if (mouseDown === 1) {

        e.target.style.backgroundColor = 'lightGray';
    }
}

function resetBoard() {
    changeBoardSize(rowsColumns);
}



//Code to determine if the mouse button is pressed or not
/*
document.body.onmousedown = function() {
    ++mouseDown;
    console.log(mouseDown)
  }
  */
document.body.onmouseup = function () {
    mouseDown = 0;
}
