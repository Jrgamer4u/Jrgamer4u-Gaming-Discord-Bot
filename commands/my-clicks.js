const { SlashCommandBuilder } = require("discord.js");
const Database = require("easy-json-database");
const clicks = new Database("./database/clicks.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("my-clicks")
		.setDescription("what is your amount"),
	async execute(interaction) {
		const id = interaction.user.id;
		if (clicks.has(`${id}`) == false) {
			clicks.push(`${id}`, 0);
		}
		if (clicks.has(`${id}`) == 1) {
			return interaction.reply(`You have ${clicks.get(`${id}`)} click.`);
		} else {
			return interaction.reply(`You have ${clicks.get(`${id}`)} clicks.`);
		}
	},
};
