import { connect } from './dataBase';

export const getTraslados = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM t_traslados WHERE cancelado = "A" limit 5'
	);
	// console.log(rows);
	// res.send('Sistema de traslados');
	res.json(rows);
};
export const getTraslado = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT folio, adquiriente, enajenante, num_escr, f_escr, area FROM t_traslados WHERE cancelado = "A" AND folio = ?',
		[req.params.id]
	);
	// console.log(req.params.id);
	// console.log(rows[0]);
	// res.send('Sistema de traslados');
	res.json(rows[0]);
};
export const getTrasladoCount = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT COUNT(folio) as total FROM t_traslados WHERE cancelado = "A"'
	);
	console.log(rows[0]['total']);
	// res.send('Sistema de traslados');
	res.json(rows[0]['total']);
};
export const setTraslado = async (req, res) => {
	const connection = await connect();
	const [result] = await connection.query(
		'INSERT INTO t_traslados (adquiriente, enajenante, num_escr, f_escr, area) VALUES (?, ?, ?, ?, ?)',
		[
			req.body.adquiriente,
			req.body.enajenante,
			req.body.num_escr,
			req.body.f_escr,
			req.body.area,
		]
	);
	// console.log(result);
	res.json({
		id: result.insertId,
		...req.body,
	});
};
export const deleteTraslado = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'UPDATE t_traslados SET cancelado = "C", status_traslado = "Cancelado" WHERE folio = ?',
		[req.params.id]
	);
	// console.log(result);
	res.sendStatus(204);
};

export const updateTraslado = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'UPDATE t_traslados SET status_traslado = "Modificado", usr_mod = "USRTEST", ? WHERE folio = ?',
		[req.body, req.params.id]
	);
	// console.log(result);
	res.sendStatus(204);
};
