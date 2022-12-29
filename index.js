const fs = require('node:fs');
const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');

require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [];
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		rest.put(Routes.applicationCommands(process.env.CLIENTID), { body: commands })
			.then(() => console.log('Successfully registered application commands.'))
			.catch(console.error);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.once(Events.ClientReady, () => {
	client.user.setActivity("JRGG | Slash Commands!");
	console.log(`Ready!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(`Error executing ${interaction.commandName}`);
		console.error(error);
		await interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});

client.login(process.env.TOKEN);
