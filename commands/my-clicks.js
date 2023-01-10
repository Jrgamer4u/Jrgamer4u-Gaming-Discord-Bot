const { SlashCommandBuilder } = require("discord.js");
const { getClient } = require("../get-client");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("my-clicks")
		.setDescription("what is your amount"),
	async execute(interaction) {
		const client = await getClient();
		const id = interaction.user.id;
		const cli = await client.query(
			"SELECT clicks FROM my_table WHERE id = $1;",
			[id]
		);
		return interaction.reply(
			`You have ${cli.rows.map((r) => Object.values(r))} clicks.`
		);
	},
};
