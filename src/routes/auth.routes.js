import { Router } from 'express';
import { authUser, singIn, singUp } from '../controllers/auth.controllers';
import { authToken } from '../middlewares';
const router = Router();

router.post('/signup', [authToken.verifyToken, authToken.isAdmin], singUp);
router.post('/signin', singIn);

router.post('/', authUser);

export default router;
