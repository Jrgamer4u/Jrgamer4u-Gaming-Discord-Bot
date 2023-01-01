const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pi')
		.setDescription('says 15 digits of pi'),
	async execute(interaction) {
		return interaction.reply(`${Math.PI}`);
	},
};