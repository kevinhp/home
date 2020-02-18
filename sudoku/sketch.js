
let grid;

function setup() {
  let w = windowWidth;
  let h = windowHeight;
  let L = min(w,h)
  createCanvas(w,h);
  grid = new SudokuBoard(9,3,L);
}

function draw() {
  background(220);
  grid.draw();
}
