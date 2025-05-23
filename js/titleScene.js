/* global phaser */
// Created by: Isaaq Simon
// Created on: May 2025
// This is the Title scene for the game

/**
 * This class is the splash scene for the game
 */
class TitleScene extends Phaser.Scene {
  constructor() {
      super({ key: 'titleScene' });
  }


  init (data) {
  this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
      console.log('Title Scene');
  }

  create (data) {
  }

  update (time, delta) { 
  }
}
  export default TitleScene