import { Router } from 'express';
const router = Router();
import { authUser, singIn, singUp, usrExist } from '../controllers/auth.controllers';

router.post('/signup', singUp);
router.post('/signin', singIn);

router.post('/', authUser);

export default router;