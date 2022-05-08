export default class LoadingScreenScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScreenScene' });
  }
  preload() {}
  create() {
    this.add.image(0, 0, 'space').setOrigin(0, 0);
    this.add.image(880, 450, 'space-door');
    this.add.text(680, 170, `DeepSpace Adventure`, {
      font: '72px Amatic SC',
    });
    const button = this.add.image(880, 720, 'button').setInteractive();
    button.once('pointerdown', () => {
      this.scene.start('LevelSelectScene');
    });
    this.cameras.main.centerOn(880, 590);
  }
}
