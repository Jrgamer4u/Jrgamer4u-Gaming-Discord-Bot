const { SlashCommandBuilder } = require('discord.js');

function colourRandom() {
	var num = Math.floor(Math.random() * Math.pow(2, 24));
	return '#' + ('00000' + num.toString(16)).slice(-6);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('color')
		.setDescription('gives random color number'),
	async execute(interaction) {
		return interaction.reply(colourRandom());
	},
};