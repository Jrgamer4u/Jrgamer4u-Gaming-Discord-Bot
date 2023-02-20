import { Octokit } from "npm:@octokit/rest@19.0.7";
import "https://deno.land/std@0.177.0/dotenv/load.ts";

const octokit = new Octokit({
	auth: `${Deno.env.get("GITHUB_ACCESS_TOKEN")}`,
});

async function createIssue(repoOwner, repoName, title, body) {
	try {
		const issue = await octokit.issues.create({
			owner: repoOwner,
			repo: repoName,
			title: title,
			body: body,
		});
		console.log(`Created issue: ${issue.data.html_url}`);
	} catch (error) {
		console.error(error);
	}
}

export const name = "interactionCreate";
export async function execute(interaction) {
	if (interaction.isChatInputCommand()) {
		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(
				`No command matching ${interaction.commandName} was found.`
			);
			return;
		}

		try {
			command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
			interaction.reply({
				content: "There was an error while executing this command!",
				ephemeral: true,
			});
		}
	} else if (interaction.isModalSubmit()) {
		if (interaction.customId === "suggestion") {
			const title = interaction.fields.getTextInputValue("titleInput");
			const suggestion = interaction.fields.getTextInputValue("suggestionInput");
			await createIssue(
				"Jrgamer4u",
				"OBR",
				`${interaction.user.username}: ${title}`,
				`${suggestion}`
			);
			await interaction.reply({
				content: "Your submission was received successfully!",
			});
		}
	} else
		return;
}
