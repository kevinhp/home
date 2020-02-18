
let grid;

function setup() {
  createCanvas(displayWidth,displayHeight);
  grid = new SudokuBoard(9,3,width,height);
}

function draw() {
  background(220);
  grid.draw();
}
