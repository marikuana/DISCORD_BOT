/*const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();

const prefix = "!";
const token = process.env.BOT_TOKEN; 

client.login(token);

client.on('ready',(ready)=>{//коли бот запускаєця
    client.user.setGame('!heslp');
});*/

client.on('message',async(message)=>{
if (message.author.bot || message.author.id==='465318048476430338') return;
  
  if (message.content.match('discord.gg') || message.content.match('discord-server.com') || message.content.match('discordapp.com/invite') || message.content.match('goo.gl/')) {
          message.delete();
          let r = message.guild.roles.find('name','Muted');
          message.member.addRole(r);
      }

  /*if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase(); 
  
  if (command === 'help'){ //інфа по командам
    let hjoin = "`!join` - Добавляє роль\n   `Example: !join Paladins`\n\n";
    let hleave = "`!leave` - Забирає роль\n   `Example: !leave Paladins`\n\n";
    let hallrole = "`!allrole` - Список всіх ролей\n\n";
    let hrole = "`!role` - Список учасників які мають цю роль\n   `Example: !role Paladins`\n\n";
    let hrandom = "`!random` - Рандомне число\n   `Example: !random 228`\n\n";
    let htext = hjoin + hleave + hallrole + hrole + hrandom;
    g_cl(message.channel.id, htext, 3447003);
  }
 
  if (command === 'join' || command === 'j'){
    if (args.length == 0) return g_cl(message.channel.id,'`Example :\n!join gta v`',16776960);
    message.member.addRole(roles(args.join(' ')))
        .then(function(){message.react('✅')})
        .catch(function(){message.react('❌')});
  }
  
 if (command === 'leave' || command === 'l'){
    if (args.length == 0) return g_cl(message.channel.id,'`Example :\n!leave gta v`',16776960);
    message.member.removeRole(roles(args))
        .then(function(){message.react('✅')})
        .catch(function(){message.react('❌')});
  }
 
if (command === 'allrole') {//показує всі ролі
    let allrole = message.guild.roles.map(role => role.name).join('|');
    let arol=[];
    let n=0;
    let rol="";
    for (var i = 0; i < allrole.length; i++) {
        if (allrole[i] == '|'){
            n+=1;
            continue;}
            if (arol[n]==undefined){
                arol[n]=allrole[i];
                continue;
            }
        arol[n]=arol[n]+allrole[i];
    }
    tyt: for (let i = 0; i < arol.length; i++) {
        for (let j = 0; j < closerole.length; j++){
            if (arol[i]==closerole[j]) {
                continue tyt;
            }
        }
        rol =rol + arol[i] + ',  '; 
    }
    let a=embed.setColor('4A90E2');
    a=embed.setDescription(`ℹ    ${message.author}\n\n${rol}`);
    message.channel.send(a);
  }
  
if (command === 'role'){
    if (args.length == 0) return g_cl(message.channel.id,'`Example :\n!online gta v`',16776960);
    var gildrole = message.guild.roles.array();
    var gar = [];
    var text = args.join(' ').toLowerCase();
    text = clear(text);
    for (let i = 0; i < gildrole.length; i++){
        if (gildrole[i].name.toLowerCase().match(text)){
            gar.push(gildrole[i]);
        
        }
    }
    if (gar.length==0) g_cl(message.channel.id,'Такої ролі немає\n`!allrole` - перелік всіх відкритих ролей',15158332);
    if (gar.length>1) g_cl(message.channel.id,'Уточніть роль: \n` '+gar.map(g => g.name).join('\n')+' `',16776960);
    if (gar.length==1) g_cl(message.channel.id,'Учасники з '+gar[0].name+' | '+gar[0].members.size+'\n\n'+gar[0].members.map(u => u.user).join(', '),3066993);
 }  
  
if (command === 'random'){
    let send = '';
    if (args[0]==undefined) args[0]=10;
    send = '!random [1 - 99999]'
    if (args[0] > 0 && args[0] <= 99999)
    send = 'You random to ' + args[0] + '\n**' + Math.floor(Math.random()*(parseInt(args[0])+1)) + '**';
    g_cl(message.channel.id, send, 3066993);
}*/
});

//////////////////////  FUNCTIONS

function g_cl(id, text, color){
    var d = new Date();
    client.channels.get(id).send({embed:{
        description: text.toString().slice(0,2000),
        color: color,
        timestamp: d,
        footer: {icon_url: client.user.avatarURL,
            text: "!help - Список команд"}
    }})
}

function roles(args){
    var gildrole = message.guild.roles.array();
    var gar = [];
    var text = args.join(' ').toLowerCase();
    text = clear(text);
    t: for (let i = 0; i < gildrole.length; i++){
            for (let j = 0; j < closerole.length; j++){
                if (gildrole[i].name == closerole[j]) continue t;
            }
        if (gildrole[i].name.toLowerCase().match(text)){
            gar.push(gildrole[i]);
        
        }
    }
    if (gar.length==0) return g_cl(message.channel.id,'Ця роль закрита, або не існує\n`!allrole` - перелік всіх відкритих ролей',15158332);
    if (gar.length>1) return g_cl(message.channel.id,'Уточніть роль: \n` '+gar.map(g => g.name).join('\n')+' `',16776960);
    if (gar.length==1) return gar[0];
}

client.on('error', ()=> console.log('save error'));

client.on('warn', console.warn);

client.on('disconnect', () => console.log('Disconnected'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

