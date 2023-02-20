import keepAlive from "./server.js";
import { readdirSync } from "node:fs";
import { Client, Collection, GatewayIntentBits, REST, Routes } from "npm:discord.js@14.7.1";
import "https://deno.land/std@0.177.0/dotenv/load.ts";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [];
client.commands = new Collection();
const commandFiles = readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = await import(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const rest = new REST({ version: "10" }).setToken(Deno.env.get("OBRBOT_TOKEN"));

(async () => {
	try {
		await rest
			.put(Routes.applicationCommands(Deno.env.get("OBRBOT_CLIENTID")), { body: commands })
			.then(() => console.log("Successfully registered application commands."))
			.catch(console.error);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

const eventFiles = readdirSync("./events")
	.filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = await import(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

keepAlive();

client.login(Deno.env.get("OBRBOT_TOKEN"));
