/* global Phaser */

// Copyright (c) 2020 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: May 2025
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fd490d', align: 'center' }
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/aliens_screen_image.jpg')
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene