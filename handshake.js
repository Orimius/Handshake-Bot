// Module
const Discord = require('discord.js');

// Client
const client = new Discord.Client();

// Ready
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content === "🤝") {
		number = 4;
		imageNumber = Math.floor(Math.random()* 4) +1;
		message.channel.send ( { files: ["./images/" + imageNumber + ".png"]} )
			.then(msg => {
				msg.delete({ timeout: 5000})
			})
			.catch(console.error);
	}
});

// Token
client.login('Token');