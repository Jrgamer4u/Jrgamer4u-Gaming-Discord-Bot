import { SlashCommandBuilder } from "npm:discord.js@14.7.1";

export const data = new SlashCommandBuilder().setName("hi").setDescription("says nah");
export async function execute(interaction) {
	await interaction.reply("nah");
}
