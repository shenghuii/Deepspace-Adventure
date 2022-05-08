export default class UIScene extends Phaser.Scene {
  energy = 100;
  supply = 0;

  constructor() {
    super({ key: 'UIScene' });
  }

  preload() {}

  create() {
    this.energy = 100;
    this.supply = 0;

    this.add.text(
      300,
      60,
      `Avoid rocks and debris, each will lower your health by 20pts, 0 energy leads to fail`,
      {
        font: '24px Amatic SC',
      }
    );
    this.add.text(300, 100, `Go find 2 supply boxes to pass!`, {
      font: '24px Amatic SC',
    });
    const energyText = this.add.text(300, 150, `Energy: ${this.energy}`, {
      font: '36px Amatic SC',
    });
    const supplyText = this.add.text(300, 200, `Supply: ${this.supply}`, {
      font: '36px Amatic SC',
    });
    const hitByRock = this.scene.get('LevelOneScene');
    const pickUpSupply = this.scene.get('LevelOneScene');

    pickUpSupply.events.on(
      'supply',
      (value: number) => {
        this.supply += value;
        supplyText.setText(`Supply: ${this.supply}`);
      },
      this
    );

    hitByRock.events.on(
      'energy',
      (value: number) => {
        this.energy -= value;
        energyText.setText(`Energy: ${this.energy}`);
      },
      this
    );
  }
  update() {
    if (this.energy <= 0) {
      console.log('energry = 0');
      this.scene.stop('LevelOneScene');
      this.scene.stop('UIScene');
      this.scene.start('EndScene');
    } else if (this.supply == 2) {
      console.log('supply = 2');
      // this.scene.stop();
      this.scene.stop('LevelOneScene');
      this.scene.stop('UIScene');
      this.scene.start('EndScene');
    }
  }
}
