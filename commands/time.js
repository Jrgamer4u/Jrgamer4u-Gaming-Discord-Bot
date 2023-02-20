import { SlashCommandBuilder } from "npm:discord.js@14.7.1";
const currentdate = new Date();
const datetime = `Date Time: ${currentdate.getDate()}/${currentdate.getMonth() + 1
	}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

export const data = new SlashCommandBuilder()
	.setName("time")
	.setDescription("shows the time");
export async function execute(interaction) {
	await interaction.reply(datetime);
}
