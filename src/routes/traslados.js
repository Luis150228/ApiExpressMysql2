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

router.get('/traslados', getTraslados); //Mostrar traslados
router.get('/traslados/count', getTrasladoCount); //Mostrar total de traslados
router.get('/traslados/:id', getTraslado); //Mostrar un traslado
router.post('/traslados', setTraslado); //Crear Traslado
router.delete('/traslados/:id', deleteTraslado); //Borrar traslados
router.put('/traslados/:id', updateTraslado); //Actualizar traslados

export default router;
