const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hi").setDescription("says nah"),
  async execute(interaction) {
    return interaction.reply("nah");
  },
};
