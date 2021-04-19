const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const server = require("./server.js");
const banco = require("./banco.js");

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm')
    return
    if(message.content == `${client.user.id}` || message.content == '<@!IDdoBot>') {
    return message.channel.send(`Olá ${message.author} Meu prefixo é ${prefix}, digite ${prefix}help para saber meus comandos`)}
});

client.login(process.env.TOKEN);