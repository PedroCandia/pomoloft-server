const bot = {};

bot.main = async function main(client, target, msg) {
  client.say(target, msg);
}

bot.onMessageHandler = async function onMessageHandler(client, target, context, msg, self) {
  // if (self) { return; }

  const commandName = msg.trim();

  if (commandName === "!abrazote") {
      client.say(target, `Te mando este súper abrazo!! ${context.username} <3`);
  }

  if (commandName === "!café") {
    client.say(target, 'Voy a por café. ☕Mal día? café, buen día? café, mucho trabajo? café, nadie te quiere? café. Café? café.');
  }

  if (commandName === "!chiste") {
    client.say(target, 'Cuenta un chiste y alégranos el día, si es malo y absurdo mejor que mejor.');
  }

  if (commandName === "!comandos") {
    client.say(target, '* !abrazote * !café * !chiste * !estudio * !horario * !leo * !reyna');
  }
}

module.exports = bot;