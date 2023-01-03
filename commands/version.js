const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("version")
    .setDescription("shows version"),
  async execute(interaction) {
    return interaction.reply("OBR Second MileStone");
  },
};
