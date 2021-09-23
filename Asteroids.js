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

  outOfBounds(){
    return (this.x > canvas.width || this.x + this.w < 0 || this.y > canvas.height || this.y + this.h < 0);
  }

  respawn() {
    var randSide = spawnPoints[Math.floor(Math.random() * 4)]
      if (randSide == 'up') {
        this.y = 0 - this.h;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.x = Math.floor(Math.random() * (canvas.width - this.h));
        this.xSpeed = Math.floor(Math.random() * (-4 - 8) + 8);
        this.ySpeed = Math.floor(Math.random() * (4 - 8) + 8);
      }
      if (randSide == 'down') {
        this.y = canvas.height - this.h;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.x = Math.floor(Math.random() * (canvas.height - this.w));
        this.xSpeed = Math.floor(Math.random() * (-4 - 8) + 8);
        this.ySpeed = Math.floor(Math.random() * (4 - 8) + 8) * -1;
      }
      if (randSide == 'left') {
        this.x = 0 - this.w;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.y = Math.floor(Math.random() * (canvas.height - this.h));
        this.xSpeed = Math.floor(Math.random() * (4 - 8) + 8);
        this.ySpeed = Math.floor(Math.random() * (-4 - 8) + 8);
      }
      if (randSide == 'right') {
        this.x = canvas.width - this.w;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.y = Math.floor(Math.random() * (canvas.height - this.h));
        this.xSpeed = Math.floor(Math.random() * (4 - 8) + 8) * -1;
        this.ySpeed = Math.floor(Math.random() * (-4 - 8) + 8);
      }
  }

  enemyMove() {
    this.y += this.ySpeed
    this.x += this.xSpeed
  }
}
