import { connect } from './dataBase';
import bcrypt from 'bcryptjs';

const passHash = async (textPass) => {
	const level = await bcrypt.genSalt(9);
	return await bcrypt.hash(textPass, level);
};

const passValidate = async (pswSave, pswNow) => {
	return await bcrypt.compare(pswSave, pswNow);
};

/**Validar usario si existe */
export const singUp = async (req, res) => {
	const connection = await connect();
	const { usrname, username, pass, userlevel, image, status, area } = await req.body;
	const psw = await passHash(pass);
	const [result] = await connection.query(
		'INSERT INTO t_users (name, username, password, user_level, image, status, area) VALUES (?, ?, ?, ?, ?, ?, ?)',
		[usrname, username, psw, userlevel, image, status, area]
	);
	// console.log(result);
	res.status(200).json({
		id: result.insertId,
	});
};

export const singIn = (req, res) => {
	res.json('SingIN!!');
};
export const authUser = (req, res) => {
	res.json('Auth!!');
};

export const singUpCorrecto = async (req, res) => {
	const { name, username, password, user_level, image, status, area } = req.body;
	const psw = await passHash(password);
	console.log(req.body);
	res.json({
		phash: psw,
		...req.body,
	});
};
