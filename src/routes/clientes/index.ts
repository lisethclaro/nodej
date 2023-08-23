import express from 'express';

import{
    Getclientes,
    Getcliente,
    Postcliente,
    Updatecliente,
    Deletecliente

} from '../../controller/clientes';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, Getclientes]);
router.get("/:id",[updatedateMiddleware, Getcliente]);
router.post("/", [updatedateMiddleware, Postcliente]);
router.put("/:id", [updatedateMiddleware, Updatecliente]);
router.delete("/:id", [updatedateMiddleware, Deletecliente]);

export default router;