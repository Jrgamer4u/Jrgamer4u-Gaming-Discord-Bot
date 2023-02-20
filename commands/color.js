import { SlashCommandBuilder } from "npm:discord.js@14.7.1";

function colourRandom() {
	const num = Math.floor(Math.random() * Math.pow(2, 24));
	return "#" + ("00000" + num.toString(16)).slice(-6);
}

export const data = new SlashCommandBuilder()
	.setName("color")
	.setDescription("gives random color number");
export async function execute(interaction) {
	await interaction.reply(colourRandom());
}
