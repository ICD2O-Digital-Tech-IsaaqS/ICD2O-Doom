// Directory: js/instructionsScene.js
// Instructions screen showing controls and gameplay tips with back button

class InstructionsScene {
    start() {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.addEventListener("click", this.handleClick.bind(this));
    }
  
    handleClick(event) {
      const x = event.offsetX;
      const y = event.offsetY;
  
      // Back button area
      if (x > 300 && x < 500 && y > 500 && y < 550) {
        changeScene(TitleScene);
      }
    }
  
    update() {
      this.ctx.clearRect(0, 0, 800, 600);
      this.ctx.fillStyle = "#000"; // Black background
      this.ctx.fillRect(0, 0, 800, 600);
  
      // Title
      this.ctx.fillStyle = "#fff";
      this.ctx.font = "48px Arial";
      this.ctx.fillText("Instructions", 290, 100);
  
      // Instruction text
      this.ctx.font = "22px Arial";
      this.ctx.fillText("Use arrow keys to move your character.", 150, 180);
      this.ctx.fillText("Press SPACE to shoot enemies.", 190, 220);
      this.ctx.fillText("Avoid enemy contact or lose health.", 150, 260);
      this.ctx.fillText("Destroy enemies to increase your score.", 140, 300);
      this.ctx.fillText("Reach 10 points to win the game.", 190, 340);
  
      // Back button
      this.ctx.fillStyle = "#444"; // Dark gray button
      this.ctx.fillRect(300, 500, 200, 50);
      this.ctx.fillStyle = "#fff";
      this.ctx.font = "28px Arial";
      this.ctx.fillText("Back", 375, 535);
    }
  }