// This file is part of the RST-ICD2O-Doom project
// Copyright (C) 2025 RST-ICD2O-Space-Aliens
// Made by Isaaq Simon
// this is the phaser 3 configuration file

/* global Phaser */

//* Game scene */

/* game.js
 * Main game controller that loads and switches between scenes
 */

let currentScene;

function changeScene(scene) {
  currentScene = new scene();
  currentScene.start();
}

window.onload = () => {
  changeScene(SplashScene);
};

function gameLoop() {
  if (currentScene && typeof currentScene.update === "function") {
    currentScene.update();
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();