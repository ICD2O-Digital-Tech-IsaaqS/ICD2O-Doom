/* global Phaser */

// Copyright (c) 2025 Isaaq Simon All rights reserved
// Created by: Isaaq Simon
// Created on: May 2025
// This is the Game Scene

class GameScene extends Phaser.Scene {

  createAlien() {
      let alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920
      // this will get a number between 1 and 50
      let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
      // alienXVelocity = Math.floor(Math.random() * 101) - 50 // this will return a sign (or lack of) cause
      let anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')

      anAlien.body.velocity.y = 70
      anAlien.body.velocity.x = alienXVelocity
      this.alienGroup.add(anAlien)
  }

  constructor() {
      super({ key: 'gameScene' })

      this.fireMissile = false
      this.score = 0

      this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
  }

  init(data) {
      this.cameras.main.setBackgroundColor(0x5f0e7a)
  }

  preload() {
      console.log('Game Scene')

      // images
      this.load.image('starBackground', './assets/starBackground.png')
      this.load.image('ship', './assets/spaceship.png')
      this.load.image('alien', './assets/alien.png')

      // audio
      this.load.audio('laser', './assets/laser1.wav')
      this.load.audio('explosion', './assets/barrelExploding.wav')
  }

  create(data) {
      this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
      this.background.setOrigin(0, 0)

      this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

      this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

      // create a group for the missiles
      this.missileGroup = this.physics.add.group()

      // create a group for the aliens
      this.alienGroup = this.add.group()

      this.createAlien()

      // Collisions between missiles and aliens
      this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
          alienCollide.destroy()
          missileCollide.destroy()

          this.sound.play('explosion')

          this.score = this.score + 1
          this.scoreText.setText('Score: ' + this.score.toString())

          this.createAlien()
      }.bind(this))
  }
}
