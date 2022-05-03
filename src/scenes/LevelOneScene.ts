import Needs from '../objects/Needs';
import DangerObject from '../objects/DangerObject';

export default class LevelOneScene extends Phaser.Scene {
  dangerObjects!: Phaser.Physics.Arcade.Group;
  needs!: Phaser.Physics.Arcade.Group;
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'LevelOneScene' });
  }
  preload() {}
  create() {
    // set bg
    this.scene.launch('UIScene');
    this.add.image(0, 0, 'space').setOrigin(0, 0);
    this.add.image(1600, 1200, 'startpoint');

    // dangerobject
    this.dangerObjects = this.physics.add.group({
      classType: DangerObject,
      setXY: { x: null, y: null },
    });
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'rock');
    this.dangerObjects.get(-1, -1, 'meteorite1');
    this.dangerObjects.get(-1, -1, 'meteorite1');
    this.dangerObjects.get(-1, -1, 'meteorite1');
    this.dangerObjects.get(-1, -1, 'meteorite2');
    this.dangerObjects.get(-1, -1, 'meteorite2');
    this.dangerObjects.get(-1, -1, 'meteorite2');
    this.dangerObjects.get(-2, -2, 'waste-debris1');
    this.dangerObjects.get(-2, -2, 'waste-debris2');
    this.dangerObjects.get(-2, -2, 'waste-debris3');

    // supply
    this.needs = this.physics.add.group({
      classType: Needs,
      setXY: { x: null, y: null },
    });
    this.needs.get(-2, -2, 'food');
    this.needs.get(-2, -2, 'supply');

    // player
    this.player = this.physics.add.sprite(1550, 1400, 'character');
    this.player.setBounce(0.4);
    this.player.setCollideWorldBounds(true);
    this._createAnimations();
    this.cameras.main.startFollow(this.player, true);
    // this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.dangerObjects, this.needs);
    this.physics.add.collider(this.dangerObjects, this.dangerObjects);
    this.physics.add.collider(this.needs, this.needs);
    this.physics.add.overlap(
      this.player,
      this.needs,
      this.pickUpSupply,
      void 0,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.dangerObjects,
      this.hitByRock,
      void 0,
      this
    );
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
      this.player.anims.play('character-walking', true);
      this.player.setGravity(Phaser.Math.Between(10, -10));
      this.player.setFlipX(false);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
      this.player.anims.play('character-walking', true);
      this.player.setGravity(Phaser.Math.Between(10, -10));
      this.player.setFlipX(true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
      this.player.anims.play('character-walking', true);
      this.player.setGravity(Phaser.Math.Between(10, -10));
      this.player.setFlipX(true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
      this.player.anims.play('character-walking', true);
      this.player.setGravity(Phaser.Math.Between(10, -10));
      this.player.setFlipX(true);
    } else {
      this.player.setVelocity(-8, -8);
      this.player.anims.play('character-stopped', true);
    }
  }
  _createAnimations() {
    this.anims.create({
      key: 'character-walking',
      frames: this.anims.generateFrameNames('character', {
        prefix: 'character-walk-0',
        start: 1,
        end: 6,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: 'character-stopped',
      frames: [{ key: 'character', frame: 0 }],
      frameRate: 1,
    });
  }
  hitByRock = (_player: any, dangerObjects: { destroy: () => void }) => {
    dangerObjects.destroy();
    this.events.emit('energy', 20);
  };
  pickUpSupply = (_player: any, needs: { destroy: () => void }) => {
    needs.destroy();
    this.events.emit('supply', 1);
  };
}
