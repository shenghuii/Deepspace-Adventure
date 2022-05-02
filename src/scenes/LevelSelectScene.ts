export default class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LevelSelectScene' });
  }
  preload() {}
  create() {
    this.add.image(0, 0, 'space').setOrigin(0, 0);
    this.add.image(400, 270, 'levels').setOrigin(0, 0);
    this.add.text(680, 140, `Select your mission`, {
      font: '72px Amatic SC',
    });
    this.add
      .image(750, 720, 'level-1-orb')
      .setInteractive()
      .once('pointerdown', () => {
        this.scene.start('LevelOneScene');
      });
    this.add.text(700, 750, `Level 1`, {
      font: '48px Amatic SC',
    });
    this.add
      .image(890, 450, 'level-2-orb')
      .setInteractive()
      .once('pointerdown', () => {
        this.scene.start('LevelTwoScene');
      });
    this.add.text(840, 360, `Level 2`, {
      font: '48px Amatic SC',
    });
    this.add
      .image(1060, 710, 'level-3-orb')
      .setInteractive()
      .once('pointerdown', () => {
        this.scene.start('LevelThreeScene');
      });
    this.add.text(1010, 750, `Level 3`, {
      font: '48px Amatic SC',
    });
    this.add
      .image(1220, 520, 'level-4-orb')
      .setInteractive()
      .once('pointerdown', () => {
        this.scene.start('LevelFourScene');
      });
    this.add.text(1180, 430, `Level 3`, {
      font: '48px Amatic SC',
    });
    this.cameras.main.centerOn(880, 750);
  }
}
