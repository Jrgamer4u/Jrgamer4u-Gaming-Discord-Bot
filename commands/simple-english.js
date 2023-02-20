import { SlashCommandBuilder } from "npm:discord.js@14.7.1";
import { readFileSync } from "node:fs";
const simple = JSON.parse(readFileSync("./database/simple.json", "utf8"));

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

export const data = new SlashCommandBuilder()
	.setName("simple-english")
	.setDescription("says a sentence in simple english");
export async function execute(interaction) {
	await interaction.reply(
		`${simple.n[mathRandomInt(1, 600)]} ${simple.v[mathRandomInt(1, 17)]} ${simple.d[mathRandomInt(1, 17)]} ${simple.n[mathRandomInt(1, 600)]}`
	);
}
