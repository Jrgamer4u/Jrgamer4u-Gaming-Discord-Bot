const { SlashCommandBuilder } = require("discord.js");
const { getClient } = require("../get-client");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("click")
		.setDescription("a thing i made"),
	async execute(interaction) {
		const client = await getClient();
		const id = interaction.user.id;
		const total = -1;
		const entries = await client.query(
			"SELECT * FROM my_table WHERE id = $1;",
			[id]
		);
		if (entries.rowCount == 0) {
			const clicks = 1;
			await client.query("INSERT INTO my_table(id, clicks) VALUES($1, $2);", [
				`${id}`,
				`${clicks}`,
			]);
			await client.query(
				"UPDATE my_table SET clicks = clicks + 1 WHERE total = $1;",
				[`${total}`]
			);
			console.log(`Inserted`);
		} else {
			await client.query(
				"UPDATE my_table SET clicks = clicks + 1 WHERE id = $1;",
				[`${id}`]
			);
			await client.query(
				"UPDATE my_table SET clicks = clicks + 1 WHERE total = $1;",
				[`${total}`]
			);
			console.log(`Updated`);
		}
		const cli = await client.query(
			"SELECT clicks FROM my_table WHERE id = $1;",
			[id]
		);
		await interaction.reply(
			`Click!\nYou have ${cli.rows.map((r) => Object.values(r))} clicks.`
		);
		await client.end();
	},
};
