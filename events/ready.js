module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		client.user.setActivity("JRGG | Slash Commands!");
		console.log(`Ready!`);
	},
};
