const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `๏ธ๐ ${days.toFixed()} dias\n๏ธ๐ ${hours.toFixed()} horas\n๐ ${minutes.toFixed()} minutos\n๏ธ๐ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade ๐ฐ๏ธ`)
    .setThumbnail("https://imgur.com/x4HbZSh.gif")
    .setColor("#FF0000")
    .setDescription(`**Estou online hรก:**\n${uptime}`)

  message.channel.send(embed);
};