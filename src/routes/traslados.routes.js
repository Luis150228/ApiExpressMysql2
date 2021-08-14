import { Router } from 'express';
import {
	deleteTraslado,
	getTraslado,
	getTrasladoCount,
	getTraslados,
	setTraslado,
	updateTraslado,
} from '../controllers/traslados.controllers';
import { authToken } from '../middlewares';

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
router.get('/', [authToken.verifyToken, authToken.isAdmin], getTraslados);

/**
 * @swagger
 * /traslados/count:
 * get:
 * 	summary: Regresa el total de todos los traslados activos
 */
router.get('/count', [authToken.verifyToken, authToken.isUser], getTrasladoCount);

/**
 * @swagger
 * /traslados/:
 * get:
 * 	summary: Muestra el folio solicitado en base a su identificador
 */
router.get('/:id', [authToken.verifyToken, authToken.isConsult], getTraslado);

/**
 * @swagger
 * /traslados/:
 * post:
 *	summary: Crea en la base de datos un nuevo traslado
 */
router.post('/', [authToken.verifyToken, authToken.isAdmin], setTraslado);

/**
 * @swagger
 * /traslados/:
 * delete:
 * 	summary: En base al ID cancela el traslado actualizando un parametro
 */
router.delete('/:id', [authToken.verifyToken, authToken.isAdmin], deleteTraslado);

/**
 * @swagger
 * /traslados/:
 * put:
 * 	summary: actualiza el traslado en diferentes campos en base a su id
 */
router.put('/:id', [authToken.verifyToken, authToken.isAdmin], updateTraslado);

export default router;
