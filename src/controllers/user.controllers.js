import { connect } from './dataBase';

export const createUser = async (req, res) => {
	const connection = await connect();
	const [result] = await connection.query(
		'INSERT INTO t_users (name, username, password, user_level, image, status, area) VALUES (?, ?, ?, ?, ?, ?, ?)',
		[
			req.body.usrname,
			req.body.username,
			req.body.pass,
			req.body.userlevel,
			req.body.image,
			req.body.status,
			req.body.area,
		]
	);
	// console.log(result);
	res.status(200).json({
		id: result.insertId,
		...req.body,
	});
};

export const getUsers = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM t_users where status = 1');
	// console.log(rows);
	// res.send('Sistema de traslados');
	res.json(rows);
};

export const deleteUser = async (req, res) => {
	/*console.log(req.params.userId);
	res.send('Fnc Borrar');*/
	const connection = await connect();
	await connection.query('UPDATE t_users SET status = 0 WHERE id = ?', [
		req.params.userId,
	]);
	res.sendStatus(204);
};
