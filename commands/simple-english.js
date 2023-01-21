const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");
const n = JSON.parse(fs.readFileSync("./database/n.json", "utf8"));
const v = JSON.parse(fs.readFileSync("./database/v.json", "utf8"));
const d = JSON.parse(fs.readFileSync("./database/d.json", "utf8"));

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("simple-english")
		.setDescription("says a sentence in simple english"),
	async execute(interaction) {
		return interaction.reply(
			`${n[mathRandomInt(1, 600)]} ${v[mathRandomInt(1, 17)]} ${d[mathRandomInt(1, 17)]
			} ${n[mathRandomInt(1, 600)]}`
		);
	},
};
