class Enemy {
  constructor(img, x, y, w, h, xSpeed, ySpeed) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  // end func
  
  drawImg() {
    canvasContext.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
    // end func

  PlayerDeath() {
    return (this.x + this.w > player.x && this.x < player.x + player.w) && (this.y + this.h > player.y && this.y < player.y + player.h);
  }
    // end func

  outOfBounds(){
    return (this.x > canvas.width || this.x + this.w < 0 || this.y > canvas.height || this.y + this.h < 0);
  }
    // end func

  respawn() {
    var randSide = spawnPoints[Math.floor(Math.random() * 4)]
      if (randSide == 'up') {
        this.y = 0 - this.h;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.x = Math.floor(Math.random() * (canvas.width - this.h));
        this.xSpeed = Math.floor(Math.random() * (-3 - 6) + 6);
        this.ySpeed = Math.floor(Math.random() * (3 - 6) + 6);
      }
      if (randSide == 'down') {
        this.y = canvas.height - this.h;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.x = Math.floor(Math.random() * (canvas.height - this.w));
        this.xSpeed = Math.floor(Math.random() * (-3 - 6) + 6);
        this.ySpeed = Math.floor(Math.random() * (3 - 6) + 6) * -1;
      }
      if (randSide == 'left') {
        this.x = 0 - this.w;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.y = Math.floor(Math.random() * (canvas.height - this.h));
        this.xSpeed = Math.floor(Math.random() * (-3 - 6) + 6);
        this.ySpeed = Math.floor(Math.random() * (3 - 6) + 6);
      }
      if (randSide == 'right') {
        this.x = canvas.width - this.w;

        this.h = Math.floor(Math.random() * (40 - 5) + 40);
        this.w = this.h;
        this.y = Math.floor(Math.random() * (canvas.height - this.h));
        this.xSpeed = Math.floor(Math.random() * (-3 - 6) + 6) * -1;
        this.ySpeed = Math.floor(Math.random() * (3 - 6) + 6);
      }
  }
    // end func

  enemyMove() {
    this.y += this.ySpeed
    this.x += this.xSpeed
  }
    // end func
}
