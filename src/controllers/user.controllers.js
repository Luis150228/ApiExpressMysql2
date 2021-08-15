import { connect } from './dataBase';
import bcrypt from 'bcryptjs';
import jsntoken from 'jsonwebtoken';
import secrword from '../secrWord';


/////Fuciones

const passHash = async (textPass) => {
	const level = await bcrypt.genSalt(9);
	return await bcrypt.hash(textPass, level);
};

const passValidate = (pswNow, pswSave) => {
	return bcrypt.compareSync(pswNow, pswSave);
};

const usrExist = async (user) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT COUNT(username) as total from t_users WHERE username = ?',
		[user]
	);

	return rows[0]['total'];
};


//////////Controladores

export const createUser = async (req, res) => {
	const connection = await connect();
	const { usrname, username, pass, userlevel, image, status, area } = await req.body;
	const asExist = await usrExist(username);

	if (asExist != 0) {
		res.json({ menssage: 'El usuario ya existe' });
	} else {
		const psw = await passHash(pass);
		const [result] = await connection.query(
			'INSERT INTO t_users (name, username, password, user_level, image, status, area) VALUES (?, ?, ?, ?, ?, ?, ?)',
			[usrname, username, psw, userlevel, image, status, area]
		);

		const token = jsntoken.sign({ id: result.insertId }, secrword.SECRET, {
			expiresIn: 86400,
		});

		res.json({
			menssage: 'Usuario Registrado',
			id: result.insertId,
			token: token,
		});
	}
};

export const getUsers = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT id, name, username, user_level, image, status, area, last_login, f_usr_create FROM t_users where status = 1');
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
