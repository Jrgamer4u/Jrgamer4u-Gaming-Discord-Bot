const { SlashCommandBuilder } = require('discord.js');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const n = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/n.json`)
const v = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/v.json`)
const d = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/d.json`)

function mathRandomInt(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simple-english')
		.setDescription('says a sentence in simple english'),
	async execute(interaction) {
		return interaction.reply(String(([n.get(String((mathRandomInt(1, 600)))), ' ', v.get(String((mathRandomInt(1, 17)))), ' ', d.get(String((mathRandomInt(1, 17)))), ' ', n.get(String((mathRandomInt(1, 600))))].join(''))));
	},
};