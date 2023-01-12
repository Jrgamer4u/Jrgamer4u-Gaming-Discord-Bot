const { SlashCommandBuilder } = require("discord.js");
const Database = require("easy-json-database");
const clicks = new Database("./database/clicks.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("total-clicks")
		.setDescription("what is everyone’s amount"),
	async execute(interaction) {
		if (clicks.has("total") == false) {
			clicks.push("total", 0);
		}
		if (clicks.has("total") == 1) {
			return interaction.reply(`You have ${clicks.get("total")} click.`);
		} else {
			return interaction.reply(`You have ${clicks.get("total")} clicks.`);
		}
	},
};
