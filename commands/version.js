import { SlashCommandBuilder } from "npm:discord.js@14.7.1";

export const data = new SlashCommandBuilder()
	.setName("version")
	.setDescription("shows version");
export async function execute(interaction) {
	await interaction.reply("OBR Welcome 2023");
}
