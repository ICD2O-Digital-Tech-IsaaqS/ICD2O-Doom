/* global phaser */
// Created by: Isaaq Simon
// Created on: May 2025
// This is the splash scene for the game

/**
 * This class is the splash scene for the game
 */
class SplashScene {
    start() {
      this.startTime = Date.now();
    }

    preload() {
        console.log('Splash Scene')
        this.load.image('splashSceneBackground', './assets/splashSceneImage.png');
    }
  
    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }
  
    update() {
      const ctx = document.getElementById("gameCanvas").getContext("2d");
      ctx.clearRect(0, 0, 800, 600);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "#fff";
      ctx.font = "36px Arial";
      ctx.fillText("Immaculata Presents...", 200, 300);
  
      // Transition to Title Scene after 3 seconds
      if (Date.now() - this.startTime > 3000) {
        changeScene(TitleScene);
      }
    }
  }