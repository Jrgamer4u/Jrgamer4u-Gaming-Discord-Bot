import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, SlashCommandBuilder } from "npm:discord.js@14.7.1";

// Create the modal
const modal = new ModalBuilder()
	.setCustomId("suggestion")
	.setTitle("Suggestion");

// Add components to modal

// Create the text input components
const titleInput = new TextInputBuilder()
	.setCustomId("titleInput")
	// The label is the prompt the user sees for this input
	.setLabel("What’s is your suggestion")
	// Short means only a single line of text
	.setStyle(TextInputStyle.Short);

const suggestionInput = new TextInputBuilder()
	.setCustomId("suggestionInput")
	.setLabel("Write about it.")
	// Paragraph means multiple lines of text.
	.setStyle(TextInputStyle.Paragraph);

// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(titleInput);
const secondActionRow = new ActionRowBuilder().addComponents(suggestionInput);

// Add inputs to the modal
modal.addComponents(firstActionRow, secondActionRow);

export const data = new SlashCommandBuilder()
	.setName("suggestion")
	.setDescription("Send a suggestion to GitHub, where i can see it.");
export async function execute(interaction) {
	await interaction.showModal(modal);
}
