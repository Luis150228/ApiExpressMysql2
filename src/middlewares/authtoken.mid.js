import { connect } from '../controllers/dataBase';
import jsntoken from 'jsonwebtoken';
import secrword from '../secrWord';

const trasladeToken = async (headerToken) => {
	const connection = await connect();

	if (!headerToken) return res.status(403).json({ menssage: 'No proporciono el Token' });

	const unToken = jsntoken.verify(headerToken, secrword.SECRET);
	// console.log(unToken.id);

	/**Validar si el usuario dentro del token existe */
	const [usrExist] = await connection.query(
		'SELECT id, COUNT(username) as total from t_users WHERE id = ?',
		[unToken.id]
	);

	return usrExist[0]['id'];
};

export const verifyToken = async (req, res, next) => {
	try {
		const connection = await connect();
		const token = req.headers['x-access-token'];
		// console.log(token);

		if (!token) return res.status(403).json({ menssage: 'No proporciono el Token' });

		const unToken = jsntoken.verify(token, secrword.SECRET);
		// console.log(unToken.id);

		/**Validar si el usuario dentro del token existe */
		const [usrExist] = await connection.query(
			'SELECT COUNT(username) as total from t_users WHERE id = ?',
			[unToken.id]
		);

		/**En caso de que el usuario exite */
		if (usrExist[0]['total'] == 0)
			return res.status(400).json({ menssage: 'Usuario sin permisos o inexistente' });

		console.log(usrExist[0]['total']);

		next();
	} catch (error) {
		return res.status(401).json({ menssage: 'No autorizado' });
	}
};

export const isGod = async (req, res, next) => {
	try {
		const connection = await connect();
		const token = req.headers['x-access-token'];
		// console.log(token);

		if (!token) return res.status(403).json({ menssage: 'No proporciono el Token' });

		const unToken = jsntoken.verify(token, secrword.SECRET);
		// console.log(unToken.id);

		/**Validar si el usuario dentro del token existe */
		const [usrExist] = await connection.query(
			'SELECT COUNT(username) as total from t_users WHERE id = ?',
			[unToken.id]
		);

		/**En caso de que el usuario exite */
		if (usrExist[0]['total'] == 0)
			return res.status(400).json({ menssage: 'Usuario sin permisos o inexistente' });

		console.log(usrExist[0]['total']);

		next();
	} catch (error) {
		return res.status(401).json({ menssage: 'No autorizado' });
	}
};

export const isAdmin = async (req, res, next) => {};
