const bot = {};

bot.main = async function main(msg) {
  const client = require("../src/index.js");
  // client.action('ailingdev', 'Hola ailing');
  client.bot.say('ailingdev', msg);
}

module.exports = bot;