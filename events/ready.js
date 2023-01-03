module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		client.user.setActivity("OBR | Slash Commands!");
		console.log("Ready!");
	},
};
