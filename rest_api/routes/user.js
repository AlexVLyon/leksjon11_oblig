import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

//CREATE

router.post('/', userController.create);
router.get('/', userController.listAll)

export default router;