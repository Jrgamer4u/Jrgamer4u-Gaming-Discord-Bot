const { Client } = require("pg");
require("dotenv").config();

module.exports.getClient = async () => {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		ssl: false,
	});
	await client.connect();
	return client;
};
