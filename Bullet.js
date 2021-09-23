class Bullet {
    constructor(x, y, w, h, c, xs, ys) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c;
      this.xs = xs;
      this.ys = ys;
  
    }
    
    drawRect() {
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    bulletMove() {
      this.x += this.xs;
      this.y += this.ys;
      
    }
}