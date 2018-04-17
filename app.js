const Discord = require('discord.js');
const settings = require('./.settings.json');
const Game = require('./ClassFiles/Game.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I\'m Online');
});

var prefix = "$";
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author === client.user) return;

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send('pong!');
  }

  if (message.content.startsWith(prefix + 'startGame')) {
    message.channel.send("Game Started!");
    const game = new Game("one", "two");
    game.printBoard(message.channel);
  }

  if (message.content.startsWith(prefix + 'son')) {
    message.channel.send('You\'re not my dad!');
  }
});

client.login(settings.token);
