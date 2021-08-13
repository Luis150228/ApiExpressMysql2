import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/user.controllers';

const router = Router();

router.post('/', createUser);

router.get('/', getUsers);

router.delete('/:userId', deleteUser);

export default router;
