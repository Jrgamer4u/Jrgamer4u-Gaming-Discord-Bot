export const name = "ready";
export const once = true;
export function execute(client) {
	client.user.setActivity("OBR | Slash Commands!");
	console.log("Ready!");
}
