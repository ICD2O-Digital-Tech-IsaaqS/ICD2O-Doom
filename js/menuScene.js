/* global Phaser */

// Copyright (c) 2025 Isaaq Simon All rights reserved
// Created by: Isaaq Simon
// Created on: May 2025
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
    constructor() {
      super({ key: 'menuScene' })
      this.menuSceneBackgroundImage = null
      this.startButton = null
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
  
    preload() {
      console.log('Menu Scene')
      this.load.image('menuSceneBackground', 'assets/aliens_screen_image2.jpg')
      this.load.image('startButton', 'assets/start.png')
    }
  
    create(data) {
      this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
      this.menuSceneBackgroundImage.x = 1920 / 2
      this.menuSceneBackgroundImage.y = 1080 / 2
  
      this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
  
      this.startButton.setInteractive({ useHandCursor: true })
      this.startButton.on('pointerdown', () => this.clickButton())
    }
  
    update(time, delta) {
      // This function is called once per game frame.
      // Use it for game logic that needs to update continuously,
      // such as movement, collision detection, or animation.
    }
  
    clickButton() {
      this.scene.start('gameScene')
    }
  }
  
  export default MenuScene
  