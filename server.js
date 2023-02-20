// @deno-types="npm:@types/express@^4.17.17"
import express from "npm:express@4.18.2";
const server = express();

server.get("/", function (_req, res) {
	res.send("Your bot is alive!");
});
function keepAlive() {
	const port = 8000;
	server.listen(port, () => {
		console.log(`Server is Ready, at http://localhost:${port}`);
	});
}

export default keepAlive;
