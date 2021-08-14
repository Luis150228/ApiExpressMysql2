import { Router } from 'express';
const router = Router();
import { authUser, singIn, singUp } from '../controllers/auth.controllers';
import { authToken } from '../middlewares';

router.post('/signup', [authToken.isAdmin], singUp);
router.post('/signin', singIn);

router.post('/', authUser);

export default router;
