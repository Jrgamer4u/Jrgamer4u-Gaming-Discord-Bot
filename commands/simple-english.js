const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");
const simple = JSON.parse(fs.readFileSync("./database/simple.json", "utf8"));

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("simple-english")
		.setDescription("says a sentence in simple english"),
	async execute(interaction) {
		return interaction.reply(
			`${simple.n[mathRandomInt(1, 600)]} ${simple.v[mathRandomInt(1, 17)]} ${simple.d[mathRandomInt(1, 17)]
			} ${simple.n[mathRandomInt(1, 600)]}`
		);
	},
};
