// This file is part of the RST-ICD2O-Space-Aliens project
// Copyright (C) 2025 RST-ICD2O-Space-Aliens
// Made by Isaaq Simon
// this is the phaser 3 configuration file

/* global Phaser */

//* Game scene */

import SplashScene from './splashScene.js';
import TitleScene from './titleScene.js';

const splashScene = new SplashScene();
const titleScene = new TitleScene();

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
    backgroundColor: 0xffffff,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

const game = new Phaser.Game(config);


//* Game scenes */
game.scene.add('splashScene', splashScene);
game.scene.add('titleScene', titleScene);
//* game title */
game.scene.start('splashScene');