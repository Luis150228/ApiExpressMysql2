"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _traslados = require("../controllers/traslados.controllers");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
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

router.get('/', [_middlewares.authToken.verifyToken, _middlewares.authToken.isAdmin], _traslados.getTraslados);
/**
 * @swagger
 * /traslados/count:
 * get:
 * 	summary: Regresa el total de todos los traslados activos
 */

router.get('/count', [_middlewares.authToken.verifyToken, _middlewares.authToken.isUser], _traslados.getTrasladoCount);
/**
 * @swagger
 * /traslados/:
 * get:
 * 	summary: Muestra el folio solicitado en base a su identificador
 */

router.get('/:id', [_middlewares.authToken.verifyToken, _middlewares.authToken.isConsult], _traslados.getTraslado);
/**
 * @swagger
 * /traslados/:
 * post:
 *	summary: Crea en la base de datos un nuevo traslado
 */

router.post('/', [_middlewares.authToken.verifyToken, _middlewares.authToken.isAdmin], _traslados.setTraslado);
/**
 * @swagger
 * /traslados/:
 * delete:
 * 	summary: En base al ID cancela el traslado actualizando un parametro
 */

router["delete"]('/:id', [_middlewares.authToken.verifyToken, _middlewares.authToken.isAdmin], _traslados.deleteTraslado);
/**
 * @swagger
 * /traslados/:
 * put:
 * 	summary: actualiza el traslado en diferentes campos en base a su id
 */

router.put('/:id', [_middlewares.authToken.verifyToken, _middlewares.authToken.isAdmin], _traslados.updateTraslado);
var _default = router;
exports["default"] = _default;