
const tmi = require("tmi.js");
const env = require("../environment.js");
const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

var cors = require('cors');
app.use(cors());

const opts = {
  identity: {
    username: "ailingdev",
    password: env.bot.password,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  channels: ["ailingdev"],
};

// Create a client with our options
const client = new tmi.client(opts);

let successfullyConnected;
(async function (){
    try {
        successfullyConnected = await client.connect();
      } catch (error) {
        console.log(error);
      }
})();

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
// app.use(require('./routes/index'));
app.use('/api', require('./routes/bot'));

// Starting the server
app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});

function onMessageHandler(target, context, msg, self) {
    // if (self) {
    //   return;
    // }

    const commandName = msg.trim();

    if (commandName === "!hola") {
        client.say(target, `Bot - holaaa ${context.username}`);
        console.log(`* Executed ${commandName} command`);
    } 

    if(commandName === '!channel') {
        client.say('ailingdev', 'BOT - AilingDev');
    }
}
  
  function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
  
  module.exports = {bot: client};