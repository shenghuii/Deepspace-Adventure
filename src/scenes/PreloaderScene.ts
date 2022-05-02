export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }
  preload() {
    this.load.setBaseURL('./assets/img/');
    this.load.image('button', 'button.png');
    this.load.image('space', 'space.png');
    this.load.image('space-door', 'door.png');
    this.load.image('levels', 'levels.png');
    this.load.image('level-1-orb', 'level-1-orb.png');
    this.load.image('level-2-orb', 'level-2-orb.png');
    this.load.image('level-3-orb', 'level-3-orb.png');
    this.load.image('level-4-orb', 'level-4-orb.png');
    this.load.atlas(
      'character',
      'astronaut/astronaut.png',
      'astronaut/astronaut.json'
    );
    this.load.image('startpoint', 'station.png');
    this.load.image('rock', 'rock.png');
    this.load.image('meteorite1', 'meteorite1.png');
    this.load.image('meteorite2', 'meteorite2.png');
    this.load.image('waste-debris1', 'waste-debris1.png');
    this.load.image('waste-debris2', 'waste-debris2.png');
    this.load.image('waste-debris3', 'waste-debris3.png');
    this.load.image('food', 'food.png');
    this.load.image('supply', 'supply.png');
    this.load.image('replay', 'replay.png');
    this.load.image('next', 'next.png');
  }
  create() {
    this.scene.start('LoadingScreenScene');
  }
}
