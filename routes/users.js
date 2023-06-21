import express from 'express';

import { getUser,createUser, getUsers, deleteUser, editUser } from '../controller/users.js';

const router = express.Router()

router.get('/', getUsers)

router.post('/', createUser);

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router;