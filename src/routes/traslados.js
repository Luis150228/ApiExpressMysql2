import { Router } from 'express';
import {
	deleteTraslado,
	getTraslado,
	getTrasladoCount,
	getTraslados,
	setTraslado,
	updateTraslado,
} from '../controllers/traslados';

const router = Router();

/**
 * @swagger
 * tags:
 * 	name:Traslados
 * 	description: Traslados EndPoint
 */

/**
 * @swagger
 * /traslados:
 * get:
 *	summary: Regresa todos los traslados activos
 */
router.get('/traslados', getTraslados);

/**
 * @swagger
 * /traslados/count:
 * get:
 * 	summary: Regresa el total de todos los traslados activos
 */
router.get('/traslados/count', getTrasladoCount);

/**
 * @swagger
 * /traslados/:
 * get:
 * 	summary: Muestra el folio solicitado en base a su identificador
 */
router.get('/traslados/:id', getTraslado);

/**
 * @swagger
 * /traslados/:
 * post:
 *	summary: Crea en la base de datos un nuevo traslado
 */
router.post('/traslados', setTraslado);

/**
 * @swagger
 * /traslados/:
 * delete:
 * 	summary: En base al ID cancela el traslado actualizando un parametro
 */
router.delete('/traslados/:id', deleteTraslado);

/**
 * @swagger
 * /traslados/:
 * put:
 * 	summary: actualiza el traslado en diferentes campos en base a su id
 */
router.put('/traslados/:id', updateTraslado);

export default router;
