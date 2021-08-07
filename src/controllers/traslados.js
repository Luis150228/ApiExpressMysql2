import { connect } from './dataBase';

export const getTraslados = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM avaluoscapt limit 5');
	console.log(rows);
	// res.send('Sistema de traslados');
	res.json(rows);
};
export const getTraslado = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT ncta, nctam, clavecat, causante, num_calle, nomcalle, numext, numint, nomcolonia, nomlocalidad FROM avaluoscapt WHERE ncta = ?',
		[req.params.id]
	);
	// console.log(req.params.id);
	// console.log(rows[0]);
	// res.send('Sistema de traslados');
	res.json(rows[0]);
};
export const getTrasladoCount = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT COUNT(*) as total FROM avaluoscapt');
	console.log(rows[0]['total']);
	// res.send('Sistema de traslados');
	res.json(rows[0]['total']);
};
export const setTraslado = async (req, res) => {
	res.send('Sistema de traslados');
};
export const deleteTraslado = async (req, res) => {
	res.send('Sistema de traslados');
};
export const updateTraslado = async (req, res) => {
	res.send('Sistema de traslados');
};
