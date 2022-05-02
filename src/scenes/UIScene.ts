export default class UIScene extends Phaser.Scene {
  energy = 100;
  fuel = 0;
  constructor() {
    super({ key: 'UIScene' });
  }
  preload() {}
  create() {
    this.add.text(100, 70, `Collect resouces to maintain the spacestation!`, {
      font: '48px Amatic SC',
    });
    const energyText = this.add.text(100, 150, `Energy: ${this.energy}`, {
      font: '36px Amatic SC',
    });
    const fuelText = this.add.text(100, 200, `Fuel Source: ${this.fuel}`, {
      font: '36px Amatic SC',
    });
    const hitByRock = this.scene.get('LevelOneScene');
    const pickUpSupply = this.scene.get('LevelOneScene');
    pickUpSupply.events.on(
      'fuel',
      (value) => {
        this.fuel += value;
        fuelText.setText(`Fuel Source: ${this.fuel}`);
      },
      this
    );
    hitByRock.events.on(
      'energy',
      (value) => {
        this.energy -= value;
        energyText.setText(`Energy: ${this.energy}`);
      },
      this
    );
  }
  update() {
    if (this.energy == 0) {
      this.scene.stop, this.scene.start('EndScene');
    } else if (this.fuel == 3) {
      this.scene.stop, this.scene.start('EndScene');
    }
  }
}
