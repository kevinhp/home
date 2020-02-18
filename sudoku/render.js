class SudokuBoard {
  constructor(N,n,w,h) {
    this.N = N;
    this.n = n;
    if (n > 1) {
      this.minors = true;
    }
    this.L = min(w,h) - 20;
  }
  
  draw() {
    // Draw grid
    xo = 10;
    yo = 10;
    xf = xo + this.L;
    yf = yo + this.L;
    dl = w/this.N;
    x = xo;
    y = yo;
    
    for (let i = 0; i < this.N; ++i) {
      stroke(100);
      strokeWeight(1);
      if (this.minors && i%this.n==0) {
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
