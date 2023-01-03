const { SlashCommandBuilder } = require("discord.js");
var currentdate = new Date();
var datetime =
  "Date Time: " +
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("time")
    .setDescription("shows the time"),
  async execute(interaction) {
    return interaction.reply(datetime);
  },
};
