const { SlashCommandBuilder } = require("discord.js");
const { getClient } = require("../get-client");

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("click-soft-risk")
		.setDescription("roll the dice"),
	async execute(interaction) {
		const client = await getClient();
		const id = interaction.user.id;
		const total = -1;
		const softrisk = mathRandomInt(-10, 10);
		const entries = await client.query(
			"SELECT * FROM my_table WHERE id = $1;",
			[id]
		);
		if (entries.rowCount == 0) {
			const clicks = 0;
			await client.query("INSERT INTO my_table(id, clicks) VALUES($1, $2);", [
				`${id}`,
				`${clicks}`,
			]);
			console.log(`Inserted`);
		}
		await client.query(
			"UPDATE my_table SET clicks = clicks + $1 WHERE id = $2;",
			[`${softrisk}`, `${id}`]
		);
		await client.query(
			"UPDATE my_table SET clicks = clicks + $1 WHERE id = $2;",
			[`${softrisk}`, `${total}`]
		);
		console.log(`Updated`);

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
