const Discord = require('discord.js');
const settings = require('./.settings.json');
const Game = require('./ClassFiles/Game.js');

const client = new Discord.Client();
game = new Game("one", "two");
var gameStarted = 0;
var challenge = 0;
var playerOne;
var playerTwo;
var debug = 0;

client.on('ready', () => {
  console.log('I\'m Online');
});

var prefix = "$";
client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author === client.user) return;

  if (debug) {
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

  if (message.content.startsWith(prefix + 'debug')) {
    debug = 1;
    game = new Game(playerOne, playerTwo);
    game.print(message.channel);
    game.board.printBlack(message.channel);

  }


  if (gameStarted) {
    if (message.author != game.player[game.turn%2].user) return;
    var msg = message.content.slice(1, message.content.length).toLowerCase().split(" ");
    var pattern = /[a-h][0-8]/;

    if (msg[0] == "move") {
      if (msg.length == 3) {
        if (pattern.test(msg[1]) && pattern.test(msg[2])) {
          if (game.move(msg[1], msg[2])) {
            if (game.turn%2 == 0) {
              game.print(message.channel);
            } else {
              game.board.printBlack(message.channel);
            }

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

  if (challenge) {
    console.log(message.author);
    if (message.author === playerTwo && message.content.startsWith(prefix + 'accept') ) {
      challenge = 0;
      gameStarted = 1;
      message.channel.send("Game Started!");
      game = new Game(playerOne, playerTwo);
      game.print(message.channel);
    }
  }

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send('pong!');
  }

  if (message.content.startsWith(prefix + 'challenge')) {
    playerOne = message.author;
    playerTwo = message.mentions.users.values().next().value;
    console.log(playerTwo);
    challenge = 1;

  }

  if (message.content.startsWith(prefix + 'son')) {
    message.channel.send('You\'re not my dad!');
  }
});

client.login(settings.token);
