export default class EndScene extends Phaser.Scene {
  energy = 100;
  constructor() {
    super({ key: 'EndScene' });
  }
  preload() {}
  create() {
    this.add.image(0, 0, 'space').setOrigin(0, 0);
    const button1 = this.add.image(800, 300, 'replay').setInteractive();
    button1.once('pointerdown', () => {
      this.scene.stop, this.scene.start('LevelOneScene');
    });
    const button2 = this.add.image(800, 500, 'next').setInteractive();
    button2.once('pointerdown', () => {
      this.scene.stop(), this.scene.start('LevelSelectScene');
    });
  }
}
