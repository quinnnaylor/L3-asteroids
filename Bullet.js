class Bullet {
    constructor(img, x, y, w, h, xs, ys) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.xs = xs;
      this.ys = ys;
  
    }
    
    drawImg() {
      canvasContext.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    bulletMove() {
      this.x += this.xs;
      this.y += this.ys;
      
    }

    outOfBounds(){
      return (this.x > canvas.width || this.x + this.w < 0 || this.y > canvas.height || this.y + this.h < 0);
    }

    hasHitItem(item) {
      return ((this.x + this.w) >= item.x && this.x <= (item.x + item.w)) && (this.y + this.h >= item.y && this.y <= (item.y + item.h));
    }

    hasHitEnemy(enemy) {
      return this.hasHitItem(enemy);
    }

    hasCollided() {
      var self = this;
      var collided = false;
      enemies.forEach(function(enemy, i) {
        if (self.hasHitEnemy(enemy)) {
          // delete enemies[i];
          collided = true;
          score ++;
          enemy.respawn();
        }
      });
      enemies = enemies.filter(item => item !== undefined);
      return collided;
    }
}