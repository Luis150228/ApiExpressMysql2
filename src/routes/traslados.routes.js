import { Router } from 'express';
import {
	deleteTraslado,
	getTraslado,
	getTrasladoCount,
	getTraslados,
	setTraslado,
	updateTraslado,
} from '../controllers/traslados.controllers';
import { verifyToken } from '../middlewares';

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
router.get('/', getTraslados);

/**
 * @swagger
 * /traslados/count:
 * get:
 * 	summary: Regresa el total de todos los traslados activos
 */
router.get('/count', getTrasladoCount);

/**
 * @swagger
 * /traslados/:
 * get:
 * 	summary: Muestra el folio solicitado en base a su identificador
 */
router.get('/:id', verifyToken, getTraslado);

/**
 * @swagger
 * /traslados/:
 * post:
 *	summary: Crea en la base de datos un nuevo traslado
 */
router.post('/', verifyToken, setTraslado);

/**
 * @swagger
 * /traslados/:
 * delete:
 * 	summary: En base al ID cancela el traslado actualizando un parametro
 */
router.delete('/:id', verifyToken, deleteTraslado);

/**
 * @swagger
 * /traslados/:
 * put:
 * 	summary: actualiza el traslado en diferentes campos en base a su id
 */
router.put('/:id', verifyToken, updateTraslado);

export default router;
