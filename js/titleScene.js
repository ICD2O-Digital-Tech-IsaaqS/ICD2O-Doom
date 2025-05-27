/* global phaser */
// Created by: Isaaq Simon
// Created on: May 2025
// This is the Title scene for the game

/**
 * This class is the splash scene for the game
 */
class TitleScene {
  start() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Start Game button
    if (x > 300 && x < 500 && y > 250 && y < 300) {
      changeScene(GameScene);
    }

    // Instructions button
    if (x > 300 && x < 500 && y > 320 && y < 370) {
      changeScene(InstructionsScene);
    }
  }

  update() {
    this.ctx.clearRect(0, 0, 800, 600);
    this.ctx.fillStyle = "#111";
    this.ctx.fillRect(0, 0, 800, 600);

    this.ctx.fillStyle = "#fff";
    this.ctx.font = "48px Arial";
    this.ctx.fillText("DOOM Browser Game", 180, 150);

    // Start button
    this.ctx.fillStyle = "#444";
    this.ctx.fillRect(300, 250, 200, 50);
    this.ctx.fillStyle = "#fff";
    this.ctx.font = "24px Arial";
    this.ctx.fillText("Start Game", 340, 285);

    // Instructions button
    this.ctx.fillStyle = "#444";
    this.ctx.fillRect(300, 320, 200, 50);
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText("Instructions", 335, 355);
  }
}
