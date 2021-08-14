import { connect } from '../controllers/dataBase';
import jsntoken from 'jsonwebtoken';
import secrword from '../secrWord';

export const trasladeToken = async (headerToken) => {
	const connection = await connect();

	if (!headerToken) return res.status(403).json({ menssage: 'No proporciono el Token' });

	const unToken = jsntoken.verify(headerToken, secrword.SECRET);
	// console.log(unToken.id);

	/**Validar si el usuario dentro del token existe */
	const [usrExist] = await connection.query(
		'SELECT id, COUNT(username) as total from t_users WHERE id = ?',
		[unToken.id]
	);

	return usrExist[0]['total'];
};

export const idonToken = async (headerToken) => {
	const connection = await connect();

	if (!headerToken) return res.status(403).json({ menssage: 'No proporciono el Token' });

	const unToken = jsntoken.verify(headerToken, secrword.SECRET);
	// console.log(unToken.id);

	/**Validar si el usuario dentro del token existe */
	const [usrExist] = await connection.query('SELECT id from t_users WHERE id = ?', [
		unToken.id,
	]);

	return usrExist[0]['id'];
};

export const rolToken = async (headerToken) => {
	const connection = await connect();

	if (!headerToken) return res.status(403).json({ menssage: 'No proporciono el Token' });

	const unToken = jsntoken.verify(headerToken, secrword.SECRET);
	// console.log(unToken.id);

	/**Validar si el usuario dentro del token existe */
	const [usrExist] = await connection.query(
		'SELECT user_level from t_users WHERE id = ?',
		[unToken.id]
	);

	return usrExist[0]['user_level'];
};
