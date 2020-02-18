
grid = new SudokuBoard(9,3);

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(220);
  grid.draw();
}
