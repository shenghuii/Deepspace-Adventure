import 'phaser';
import LevelOneScene from './scenes/LevelOneScene';
import LevelSelectScene from './scenes/LevelSelectScene';
import LoadingScreenScene from './scenes/LoadingScreenScene';
import PreloaderScene from './scenes/PreloaderScene';
import EndScene from './scenes/EndScene';
import UIScene from './scenes/UIScene';

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: true,
    },
  },
  scene: [
    PreloaderScene,
    LoadingScreenScene,
    LevelSelectScene,
    LevelOneScene,
    EndScene,
    UIScene,
  ],
};

new Phaser.Game(config);
