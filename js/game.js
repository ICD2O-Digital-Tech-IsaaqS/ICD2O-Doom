/* global Phaser */

// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: May 2025
// This file contains the JS functions for index.html

  //* Game scene */
  const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true
      }
    },
    // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
      mode: Phaser.Scale.FIT,
      // We place it in the middle of the page.
      autoCentre: Phaser.Scale.CENTRE_BOTH
    }
  }
    
  const game = new Phaser.Game(config)
  console.log(game)