/*global Game*/
var config = {
    forceSingleUpdate : true,
    renderer: Phaser.CANVAS,
    width: Game.w,
    height: Game.h,
    parent: 'game'
};
var game = new Phaser.Game(config);

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
game.state.add('Menu', Game.Menu);
game.state.add('Play', Game.Play);
game.state.add('Outro', Game.Outro);
game.state.add('Toplist', Game.Toplist);

game.state.start('Boot');
