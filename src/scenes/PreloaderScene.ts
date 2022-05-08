export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }
  preload() {
    // add bg music
    this.load.audio('spacebgm', './assets/sound/spacefantasy.mp3');
    // add hit and collect sound effect
    this.load.audio('hitsound', './assets/sound/hit.wav');
    this.load.audio('collectsound', './assets/sound/collect.mp3');

    // prefix
    // this.load.setBaseURL('./assets/img/');
    // add enter button
    this.load.image('button', './assets/img/button.png');
    // add bg
    this.load.image('space', './assets/img/space.png');
    this.load.image('space-door', './assets/img/door.png');
    this.load.image('levels', './assets/img/levels.png');
    this.load.image('startpoint', './assets/img/station.png');
    // add level icons
    this.load.image('level-1-orb', './assets/img/level-1-orb.png');
    this.load.image('level-2-orb', './assets/img/level-2-orb.png');
    this.load.image('level-3-orb', './assets/img/level-3-orb.png');
    this.load.image('level-4-orb', './assets/img/level-4-orb.png');
    // add character
    this.load.atlas(
      'character',
      './assets/img/astronaut/astronaut.png',
      './assets/img/astronaut/astronaut.json'
    );
    // add dangerous object
    this.load.image('rock', './assets/img/rock.png');
    this.load.image('meteorite1', './assets/img/meteorite1.png');
    this.load.image('meteorite2', './assets/img/meteorite2.png');
    this.load.image('waste-debris1', './assets/img/waste-debris1.png');
    this.load.image('waste-debris2', './assets/img/waste-debris2.png');
    this.load.image('waste-debris3', './assets/img/waste-debris3.png');
    // add supplies
    this.load.image('food', './assets/img/food.png');
    this.load.image('supply', './assets/img/supply.png');
    // add end scene buttons
    this.load.image('replay', './assets/img/replay.png');
    this.load.image('next', './assets/img/next.png');
  }
  create() {
    this.scene.start('LoadingScreenScene');
  }
}
