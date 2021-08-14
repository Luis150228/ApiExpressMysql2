import { connect } from './dataBase';
import bcrypt from 'bcryptjs';
import jsntoken from 'jsonwebtoken';
import secrword from '../secrWord';

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

/**Crear un usuario y validar que no se repita*/
export const singUp = async (req, res) => {
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

/**Validar el inicio de sesion y generar token*/
export const singIn = async (req, res) => {
	const connection = await connect();
	const { username, pass } = await req.body;
	const [rows] = await connection.query(
		'SELECT COUNT(username) as total from t_users WHERE username = ?',
		[username]
	);

	// res.json(rows[0]['total']);

	if (rows[0]['total'] == 1) {
		const [usrow] = await connection.query(
			'SELECT id, name, username, password from t_users WHERE username = ?',
			[username]
		);

		// const matchPassword = bcrypt.compareSync('amore', usrow[0]['password']);
		const matchPassword = passValidate(pass, usrow[0]['password']);

		if (!matchPassword)
			return res
				.status(400)
				.json({ token: null, menssage: 'Contraseña Invalida', match: matchPassword });

		const token = jsntoken.sign({ id: usrow[0]['id'] }, secrword.SECRET, {
			expiresIn: 86400,
		});

		res.status(200).json({
			token: token,
			menssage: `Bienvenido ${usrow[0]['name']}`,
			match: matchPassword,
		});
	} else {
		res.status(400).json({
			menssage: 'No existe el usuario',
			res: rows[0]['total'],
			usr: username,
		});
	}
};

export const authUser = (req, res) => {
	res.json('Auth!!');
};
