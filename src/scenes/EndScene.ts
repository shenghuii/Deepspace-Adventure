export default class EndScene extends Phaser.Scene {
  energy = 100;
  constructor() {
    super({ key: 'EndScene' });
  }
  preload() {}
  create() {
    this.add.image(0, 0, 'space').setOrigin(0, 0);

    // Replay Button
    const replayButton = this.add.image(800, 400, 'replay');

    replayButton.setInteractive();

    replayButton.once('pointerdown', () => {
      this.scene.stop('EndScene');
      this.scene.start('LevelOneScene');
    });

    // Next Level Button
    const nextLevelButton = this.add.image(800, 500, 'next');

    nextLevelButton.setInteractive();

    nextLevelButton.once('pointerdown', () => {
      this.scene.stop('EndScene');
      this.scene.start('LevelSelectScene');
    });
    this.cameras.main.centerOn(800, 550);
  }
}
