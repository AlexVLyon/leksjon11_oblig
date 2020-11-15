import express from 'express';
import { pollController } from '../controllers/index.js';

const router = express.Router();


router.get('/', pollController.listAll)
router.post('/', pollController.create);
//UPDATE:
router.patch('/ja/:id', pollController.updateJa);
router.patch('/nei/:id', pollController.updateNei);
//router.post('/nei/:id', pollController.updateNei);


//DELETE:

export default router;