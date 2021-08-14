import { Router } from 'express';
import { homeIndex } from '../controllers/index.controllers';

const router = Router();

router.get('/', homeIndex);

export default router;
