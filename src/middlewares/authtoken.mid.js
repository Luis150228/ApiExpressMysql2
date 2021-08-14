import { trasladeToken, idonToken, rolToken } from './function.mid';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];
		const idToken = await trasladeToken(token);
		// console.log('Existe el id Toke: ', idToken, token);
		/**En caso de que el usuario exite */
		if (idToken == 0)
			return res.status(400).json({ menssage: 'Usuario sin permisos o inexistente' });
		// console.log('Existe el id Toke: ', idToken);
		next();
	} catch (error) {
		return res.status(401).json({ menssage: 'No autorizado' });
	}
};

export const isGod = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	if (rol !== 'god') return res.json({ menssage: 'No soy un dios' });
	// console.log('IF Rol de usuario: ', rol);
	next();
};

export const isAdmin = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	if (rol !== 'god' || rol !== 'admin')
		return res.json({ menssage: 'No es un Administrador' });
	next();
};

export const isUser = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	if (rol !== 'god' || rol !== 'admin' || rol !== 'user')
		return res.json({ menssage: 'No puede realizar ninguna modificacion' });
	next();
};

export const isConsult = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	if (rol !== 'god' || rol !== 'admin' || rol !== 'user' || rol !== 'consult')
		return res.json({ menssage: 'No puede realizar ninguna consulta' });
	next();
};
