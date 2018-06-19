const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
        message.reply('pong');
    }

});

bot.login('NDQzMjA2NjI0ODk1Njk2OTM2.DdJ_2g.I_wEsoq9sB8RDt4cQ796vgU0MeY');