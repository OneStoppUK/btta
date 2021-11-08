module.exports = {
	name: 'help',
	description: 'Information command',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('beatX is currently in maintenance mode, we will be back shortly!');
		return message.channel.send(`server error - maintenance is on!`);
	}
};
