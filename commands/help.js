const Discord = require('discord.js');
const moment = require("moment");
const pack = require("../package.json")
const verson = pack.version;


exports.run = async (client, message, args) => {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let uptime = `${days.toFixed()} dias, ${hours.toFixed()}:${minutes.toFixed()}:${seconds.toFixed()}`;

	let embed = new Discord.MessageEmbed()
		.setTitle(`Central de comandos`)
		.setDescription(
			`diga de qual tipo de comandos você estar precisando de ajuda:
     🛠 utils
     📰 informação
     `)
		.setColor('#FF0020');
	message.channel.send(embed).then(msg => {
		msg.react('🛠');
		msg.react('📰');
		
		let filtro1 = (r, u) => r.emoji.name === '🛠' && u.id === message.author.id;
		let filtro2 = (r, u) => r.emoji.name === '📰' && u.id === message.author.id;

		let coletor = msg.createReactionCollector(filtro1);
		let coletor1 = msg.createReactionCollector(filtro2);

		coletor.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`Central de comandos`)
				.setDescription(`moderação`)
				.addFields(
                    { name: '📥 addlink', value: 'adiciona um link para ser monitorado', inline: false },
                    { name: '📤 remo', value: 'remove um link (em desenvolvimento)', inline: false },
                    { name: '📡 status', value: 'ver o status do seu link (em desenvolvimento)', inline: false },
                    { name: '🕗 uptime', value: 'ver a quanto tempo o bot ta on', inline: false },
                    { name: '📶 ping', value: 'ver o ping do bot', inline: false },
                    { name: '🆘 help', value: 'ver todos os meus comandos', inline: false}
				)
				.setColor('#FF0020');

			msg.edit(embed);
		});

		coletor1.on('collect', c => {
			let embed = new Discord.MessageEmbed()
				.setTitle(`informações do bot`)
				.addFields(
				{ name: 'Users:', value: `${client.users.cache.size}`},
				{ name: 'Bot uptime:', value: `${uptime}`},
				{ name: 'Plataforma:', value: `${process.platform}`},
				{ name: 'Version:', value: `${verson}`},
				{ name: 'Discord.js version:', value: `${Discord.version}`}
				)
				.setColor('#FF0020');

			msg.edit(embed);
		});
	});
}