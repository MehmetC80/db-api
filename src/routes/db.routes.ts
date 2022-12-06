import { Router } from 'express';

import {
    getDistance, search
} from '../controllers/controller.dbRoutes';


const router = Router();


// router.get('/db', getAllRoutes);

router.get("/v1/distance/:from/:to", getDistance);

router.get("/search/:searchTerm", search);


export default router;