export default class DangerObject extends Phaser.Physics.Arcade.Image {
  velocityX;
  velocityY;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture
  ) {
    console.log(texture, x, y);
    if (x === -1) {
      x = Phaser.Math.Between(200, 1800);
    }
    if (y === -1) {
      y = Phaser.Math.Between(200, 1600);
    }
    super(scene, x, y, texture);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.velocityX = Phaser.Math.FloatBetween(-50, 50);
    this.velocityY = Phaser.Math.FloatBetween(-50, 50);
    this.setBounce(1);
    this.setCollideWorldBounds(true);
    this.body.onCollide = true;
  }
  preUpdate() {
    this.setVelocity(this.velocityX, this.velocityY);
  }
}
