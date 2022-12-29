const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with Hello, World!'),
	async execute(interaction) {
		return interaction.reply('Hello, World!');
	},
};