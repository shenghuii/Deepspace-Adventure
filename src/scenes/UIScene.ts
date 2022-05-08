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

    this.add.text(100, 70, `Avoid the rocks and waste debris!`, {
      font: '36px Amatic SC',
    });
    this.add.text(100, 100, `Go find 3 supply boxes to survive!`, {
      font: '36px Amatic SC',
    });
    const energyText = this.add.text(100, 150, `Energy: ${this.energy}`, {
      font: '36px Amatic SC',
    });
    const supplyText = this.add.text(100, 200, `Supply: ${this.supply}`, {
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
