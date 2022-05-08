import 'phaser';
import LevelOneScene from './scenes/LevelOneScene';
import LevelSelectScene from './scenes/LevelSelectScene';
import LoadingScreenScene from './scenes/LoadingScreenScene';
import PreloaderScene from './scenes/PreloaderScene';
import EndScene from './scenes/EndScene';
import UIScene from './scenes/UIScene';

const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 1000,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
  scale: { parent: 'mygame', autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: [
    PreloaderScene,
    LoadingScreenScene,
    LevelSelectScene,
    LevelOneScene,
    UIScene,
    EndScene,
  ],
};

new Phaser.Game(config);
