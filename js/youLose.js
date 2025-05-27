// Directory: js/youLose.js
// Animated lose screen

class YouLoseScene {
    start() {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.startTime = Date.now();
    }
  
    update() {
      const time = Date.now() - this.startTime;
      this.ctx.clearRect(0, 0, 800, 600);
      this.ctx.fillStyle = "darkred";
      this.ctx.fillRect(0, 0, 800, 600);
  
      this.ctx.fillStyle = time % 1000 < 500 ? "white" : "black";
      this.ctx.font = "48px Arial";
      this.ctx.fillText("YOU LOSE", 300, 250);
  
      this.ctx.font = "24px Arial";
      this.ctx.fillText("Click to return to Main Menu", 250, 350);
  
      this.canvas.onclick = () => {
        changeScene(TitleScene);
      };
    }
  }
  