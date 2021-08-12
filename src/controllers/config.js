import { config as dotenv } from 'dotenv';

dotenv();
// console.log(process.env.DBUSER);
export const config = {
	host: process.env.DBHOST,
	port: process.env.DBPORT,
	user: process.env.DBUSER,
	password: process.env.DBPASS,
	database: process.env.DBSHEMA,
};
