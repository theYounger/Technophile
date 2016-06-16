var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');

function NintendoDS () {

  WebBrowser.call(this);
  GameConsole.call(this, 'Nintendo DS');

}

module.exports = NintendoDS;

