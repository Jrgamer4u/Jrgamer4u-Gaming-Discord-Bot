import { SlashCommandBuilder } from "npm:discord.js@14.7.1";

export const data = new SlashCommandBuilder()
	.setName("pi")
	.setDescription("says 15 digits of pi");
export async function execute(interaction) {
	await interaction.reply(`${Math.PI}`);
}
