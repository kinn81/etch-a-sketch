const mainCanvas = document.querySelector('div[data-key="mainCanvas"]');
const boardSize = 600;
let rowsColumns = 16;
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
        tempDiv.style.border = '.2px solid lightgray';
        tempDiv.addEventListener('mouseenter', colorChangeHover);
        tempDiv.addEventListener('mousedown', colorChangeClick);
        tempDiv.addEventListener('mouseup', mouseUp);
        //tempDiv.setAttribute('draggable', 'false');   
        tempDiv.ondragstart = function() { return false; };
        mainCanvas.appendChild(tempDiv);
    }
}
function colorChangeClick(e) {
    mouseClicked = 1;
    e.target.style.backgroundColor = 'lightGray';

}

function mouseUp() {
    mouseClicked = 0;
}
function colorChangeHover(e) {
    //if (e.buttons > 0) {
    if(mouseClicked == 1) {
        //e.stopPropogation();
        e.preventDefault();
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

document.body.onmouseup = function () {
    mouseDown = 0;
}
*/
