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
    let xo = 10;
    let yo = 10;
    let xf = xo + this.L;
    let yf = yo + this.L;
    let dl = w/this.N;
    let x = xo;
    let y = yo;
    
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
