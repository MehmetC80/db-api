import express, { Router } from 'express';

import {
    getAllRoutes
} from '../controllers/controller.dbRoutes';


const router = Router();

router.get('/db', getAllRoutes);

export default router;