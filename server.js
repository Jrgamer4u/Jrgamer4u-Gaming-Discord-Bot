const express = require("express");
const server = express();

server.get("/", function (_req, res) {
	res.send("Your bot is alive!");
});
function keepAlive() {
	const port = 3000;
	server.listen(port, () => {
		console.log(`Server is Ready, at http://localhost:${port}`);
	});
}

module.exports = keepAlive;
