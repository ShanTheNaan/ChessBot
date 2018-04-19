const Discord = require('discord.js');
const settings = require('./.settings.json');
const Game = require('./ClassFiles/Game.js');

const client = new Discord.Client();
game = new Game("one", "two");
var gameStarted = 1;

client.on('ready', () => {
  console.log('I\'m Online');
});

var prefix = "$";
client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author === client.user) return;

  if (gameStarted) {
    var msg = message.content.slice(1, message.content.length).toLowerCase().split(" ");
    var pattern = /[a-h][0-8]/;

    if (msg[0] == "move") {
      if (msg.length == 3) {
        if (pattern.test(msg[1]) && pattern.test(msg[2])) {
          if (game.move(msg[1], msg[2])) {
            game.print(message.channel);
          } else {
            message.channel.send("Invalid Move, Please choose a valid move!");
          }
        } else {
          message.channel.send("Invalid Command, Please try again!");
        }
      } else {
        message.channel.send("Too many arguments provided!");
      }
    }
  }

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send('pong!');
  }

  if (message.content.startsWith(prefix + 'startGame')) {
    message.channel.send("Game Started!");
    game = new Game("one", "two");
    game.print(message.channel);
    gameStarted = 1;
  }

  if (message.content.startsWith(prefix + 'son')) {
    message.channel.send('You\'re not my dad!');
  }
});

client.login(settings.token);
