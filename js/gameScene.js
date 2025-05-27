/* gameScene.js
 * Contains main game logic: player movement, enemy spawn, collision, score, end conditions
 */

class GameScene {
    start() {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.player = new Player();
      this.enemies = [];
      this.bullets = [];
      this.explosions = [];
      this.health = 100;
      this.score = 0;
      this.lastEnemySpawn = 0;
      this.spawnInterval = 1000;
      this.isGameOver = false;
  
      window.addEventListener("keydown", (e) => this.player.handleKey(e));
      this.bgMusic = new Audio("sounds/game_bgm.mp3");
      this.bgMusic.loop = true;
      this.bgMusic.play();
    }
  
    spawnEnemy() {
      const now = Date.now();
      if (now - this.lastEnemySpawn > this.spawnInterval) {
        this.enemies.push(new Enemy());
        this.lastEnemySpawn = now;
      }
    }
  
    checkCollisions() {
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const enemy = this.enemies[i];
        // Player collision
        if (this.player.alive && enemy.collidesWith(this.player)) {
          this.health -= 50;
          this.explosions.push(new Explosion(enemy.x, enemy.y));
          this.enemies.splice(i, 1);
          if (this.health <= 0) {
            this.player.alive = false;
            this.explosions.push(new Explosion(this.player.x, this.player.y));
            this.bgMusic.pause();
            setTimeout(() => changeScene(YouLoseScene), 1000);
          }
          continue;
        }
        // Bullet collision
        for (let j = this.bullets.length - 1; j >= 0; j--) {
          const bullet = this.bullets[j];
          if (enemy.collidesWith(bullet)) {
            this.score++;
            this.explosions.push(new Explosion(enemy.x, enemy.y));
            this.enemies.splice(i, 1);
            this.bullets.splice(j, 1);
            if (this.score >= 10) {
              this.bgMusic.pause();
              setTimeout(() => changeScene(YouWinScene), 1000);
            }
            break;
          }
        }
      }
    }
  
    update() {
      if (this.isGameOver) return;
      this.ctx.clearRect(0, 0, 800, 600);
      this.ctx.fillStyle = "#000";
      this.ctx.fillRect(0, 0, 800, 600);
  
      this.spawnEnemy();
      this.player.update(this.ctx);
  
      for (const bullet of this.bullets) bullet.update(this.ctx);
      for (const enemy of this.enemies) enemy.update(this.ctx);
      for (const explosion of this.explosions) explosion.update(this.ctx);
      this.explosions = this.explosions.filter(e => !e.done);
  
      this.checkCollisions();
      this.drawHUD();
    }
  
    drawHUD() {
      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Arial";
      this.ctx.fillText("Score: " + this.score, 20, 30);
  
      // Health bar
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(20, 50, 100, 10);
      this.ctx.fillStyle = "lime";
      this.ctx.fillRect(20, 50, this.health, 10);
    }
  }