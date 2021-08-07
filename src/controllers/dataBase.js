import mysql from 'mysql2/promise';
import { config } from './config';

export const connect = async () => {
	return await mysql.createConnection(config);
	/*const [row] = await conn.query('SELECT 1 + 1');
	 */ console.log(row);
};

// connect();
