const { SlashCommandBuilder } = require("discord.js");
const Database = require("easy-json-database");
const n = new Database("./database/n.json");
const v = new Database("./database/v.json");
const d = new Database("./database/d.json");

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("simple-english")
		.setDescription("says a sentence in simple english"),
	async execute(interaction) {
		return interaction.reply(
			`${n.get(`${mathRandomInt(1, 600)}`)} ${v.get(
				`${mathRandomInt(1, 17)}`
			)} ${d.get(`${mathRandomInt(1, 17)}`)} ${n.get(
				`${mathRandomInt(1, 600)}`
			)}`
		);
	},
};
