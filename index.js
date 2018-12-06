const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();

const prefix = "!";
const token = process.env.BOT_TOKEN; 

client.login(token);
/*
client.on('ready',(ready)=>{//коли бот запускаєця
    client.user.setGame('!heslp');
});*/

client.on('message',async(message)=>{
if (message.author.bot || message.author.id==='465318048476430338') return;
  
  if (message.content.match('discord.gg') || message.content.match('discord-server.com') || message.content.match('discordapp.com/invite') || message.content.match('goo.gl/') || message.content.match('invite.gg')) {
          message.delete();
          let r = message.guild.roles.find('name','Muted');
          message.member.addRole(r);
      }

  /*if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase(); */
  
});


client.on('error', ()=> console.log('save error'));

client.on('warn', console.warn);

client.on('disconnect', () => console.log('Disconnected'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

