const bot = {};

bot.main = async function main(client, target, msg) {
  client.say(target, msg);
}

bot.onMessageHandler = async function onMessageHandler(client, target, context, msg, self) {
  // if (self) { return; }
  if(!msg.startsWith('!')) return;

  debugger;

  const commands = {
    '!abrazote': `Te mando este súper abrazo! ${context.username} <3`,
    '!café': 'Voy a por café. ☕Mal día? café, buen día? café, mucho trabajo? café, nadie te quiere? café. Café? café.',
    '!chiste': 'Cuenta un chiste y alégranos el día, si es malo y absurdo mejor que mejor.',
    '!comandos': '* !abrazote * !café * !chiste * !estudio * !horario * !leo * !reyna',
    '!crono':'Gracias por recordarme poner el crono, no sé que sería de este canal sin vosotras. #streamermal',
  }

  const commandName = msg.trim();

  const message = commands[commandName] ? commands[commandName] : 'El comando no se encontro.';

  client.say(target, message);
}

module.exports = bot;