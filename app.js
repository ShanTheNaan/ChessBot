const Discord = require('discord.js');
const settings = require('./.settings.json');
const ChessBoard = require('./ClassFiles/ChessBoard.js');

const client = new Discord.Client();
const board = new ChessBoard();

client.on('ready', () => {
  console.log('I\'m Online');
});

var prefix = "$";
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author === client.user) return;

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send('pong!');
  }

  if (message.content.startsWith(prefix + 'show')) {
    board.printBoard(message.channel);
  }

  if (message.content.startsWith(prefix + 'son')) {
    message.channel.send('You\'re not my dad!');
  }
});

client.login(settings.token);
