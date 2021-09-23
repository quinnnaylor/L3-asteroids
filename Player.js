class Player {
  constructor(x, y, w, h, c, xSpeed, ySpeed, rate) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.rate = rate;
  }

  drawRect() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  // ratefunc() {
  //   if (rightPressed) {
  //     this.xSpeed + rate;
  //   }

  //   if (leftPressed) {
  //     this.xSpeed - rate;
  //   }

  //   if (upPressed) {
  //     this.ySpeed - rate;
  //   }

  //   if (downPressed) {
  //     this.ySpeed + rate;
  //   }
  // }

  playerSides(){
    if (this.x > canvas.width) { // once out of right screen wrap to left 
      this.x = 0;
    }
    if (this.x < 0) { // once out of left side of screen wrap to right
      this.x = canvas.width - this.w;
    }
    if(this.y < 0) { // cant go out of top of screen
      this.y = canvas.height - this.h;
    }
    if (this.y + this.h > canvas.height) {// cant go out of bottom of screen
      this.y = 0 + this.h;
    }
  }

  playerMove() {
    this.x += this.xSpeed
    this.y += this.ySpeed

    if (rightPressed) {
        this.xSpeed += this.rate;

      }
    if (leftPressed) {
        this.xSpeed -= this.rate;

      }
    if (upPressed) {
        this.ySpeed -= this.rate;

      }
    if (downPressed) {
        this.ySpeed += this.rate;

      }

      // for(rightPressed = true) {
      //   this.x += rate;
      // }
  }



}