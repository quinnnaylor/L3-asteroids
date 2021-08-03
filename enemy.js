class Enemy {
  constructor(x, y, w, h, c, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  drawRect() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  PlayerDeath() {
    return (this.x + this.w > player.x && this.x < player.x + player.w) && (this.y + this.h > player.y && this.y < player.y + player.h);
  }

  enemyMove() {
    this.y += this.ySpeed
    this.x += this.xSpeed

    if(this.x + this.w > canvas.width) {
      this.xSpeed *= -1;
    }
    
    if(this.x + this.w < 0) {
      this.xSpeed *= -1;
    }
    

    if (this.y > canvas.height){ // once out of right screen wrap to left 
      this.y = 0 - this.h;

      this.h = Math.floor(Math.random() * (20 - 10) + 20);
      this.w = this.h;
      this.x = Math.floor(Math.random() * (canvas.width - this.x));
      this.xSpeed = Math.floor(Math.random() * (12 - 3) + 3);
      this.ySpeed = Math.floor(Math.random() * (12 - 3) + 3);
    }
  }

}
