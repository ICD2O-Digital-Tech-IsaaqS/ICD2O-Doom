// Directory: js/youWin.js
// Animated win screen

class YouWinScene {
    start() {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.startTime = Date.now();
      this.animationPhase = 0;
    }
  
    update() {
      const time = Date.now() - this.startTime;
      this.ctx.clearRect(0, 0, 800, 600);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, 800, 600);
  
      // Animate text color flashing
      if (Math.floor(time / 500) % 2 === 0) {
        this.ctx.fillStyle = "lime";
      } else {
        this.ctx.fillStyle = "white";
      }
  
      this.ctx.font = "48px Arial";
      this.ctx.fillText("YOU WIN!", 300, 250);
  
      this.ctx.font = "24px Arial";
      this.ctx.fillText("Click to return to Main Menu", 250, 350);
  
      this.canvas.onclick = () => {
        changeScene(TitleScene);
      };
    }
  }