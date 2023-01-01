const keepAlive = require("./server.js");
const fs = require("node:fs");
const {
	Client,
	Collection,
	GatewayIntentBits,
	REST,
	Routes,
} = require("discord.js");

require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [];
client.commands = new Collection();
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
	try {
		rest
			.put(Routes.applicationCommands(process.env.CLIENTID), { body: commands })
			.then(() => console.log("Successfully registered application commands."))
			.catch(console.error);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

const eventFiles = fs
	.readdirSync("./events")
	.filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

keepAlive();

client.login(process.env.TOKEN);
