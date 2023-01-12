const { SlashCommandBuilder } = require("discord.js");
const Database = require("easy-json-database");
const clicks = new Database("./database/clicks.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("click")
		.setDescription("a thing i made"),
	async execute(interaction) {
		const id = interaction.user.id;
		if (clicks.has("total") == false) {
			clicks.push("total", 1);
		} else {
			clicks.add("total", 1);
		}
		if (clicks.has(`${id}`) == false) {
			clicks.push(`${id}`, 1);
		} else {
			clicks.add(`${id}`, 1);
		}
		return interaction.reply("Click!");
	},
};
