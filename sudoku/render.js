class SudokuBoard {
  constructor(N,n,L) {
    this.N = N;
    this.n = n;
    if (n > 1) {
      this.minors = true;
    }
    this.margin = 50
    this.L = L - 2*this.margin;
  }
  
  draw() {
    // Draw grid
    let xo = this.margin;
    let yo = this.margin;
    let xf = xo + this.L;
    let yf = yo + this.L;
    let dl = this.L/(this.N);
    let x = xo;
    let y = yo;
    
    for (let i = 0; i <= this.N; ++i) {
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
      x += dl;
      y += dl;
    }
  }
  
}
