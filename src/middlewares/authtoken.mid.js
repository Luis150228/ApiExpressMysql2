import { trasladeToken, idonToken, rolToken } from './function.mid';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];
		const eToken = await trasladeToken(token);
		/**Valida la existencia del usuario */
		eToken == 0
			? res
					.status(400)
					.json({ menssage: 'Verify Token: Usuario sin permisos o inexistente' })
			: next();
	} catch (error) {
		return res.status(401).json({ menssage: 'Verify Token: No autorizado o sin token' });
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

	rol == 'god' || rol == 'admin'
		? next()
		: res.status(401).json({
				menssage: `Se requiere permisos de Administrador su nivel es de ${rol}`,
		  });
};

export const isUser = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	rol == 'god' || rol == 'admin' || rol == 'user'
		? next()
		: res.status(401).json({
				menssage: `No puede realizar ninguna modificacion su nivel es de ${rol}`,
		  });
};

export const isConsult = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	const rol = await rolToken(token);

	rol == 'god' || rol == 'admin' || rol == 'user' || rol == 'consult'
		? next()
		: res.status(401).json({
				menssage: `You cannot check your username is ${rol}`,
		  });
};
