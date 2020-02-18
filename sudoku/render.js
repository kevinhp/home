class SudokuBoard {
  constructor(N,n) {
    this.N = 9;
    this.n = 3;
    if (N) {
      this.N = N;
    }
    if (n) {
      this.n = n;
    }
  }
  
  draw() {
    // Establish square's dimensions based on canvas size
    w = width - 20;
    h = height - 20;
    L = min(w,h);
    
    // Draw grid
    xo = 10;
    yo = 10;
    xf = xo + L;
    yf = yo + L;
    dl = w/this.N;
    x = xo;
    y = yo;
    
    for (let i = 0; i < this.N; ++i) {
      stroke(100);
      strokeWeight(1);
      if (i%this.n==0) {
        stroke(0);
        strokeWeight(2);
      }
      // horizontal line
      line(xo,y,xf,y);
      // vertical line
      line(x,yo,x,yf);
    }
  }
  
}
