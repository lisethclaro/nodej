import express from 'express';

import{
    Getpedidos,
    Getpedido,
    Postpedido,
    Updatepedido,
    Deletepedido

} from '../../controller/pedidos';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, Getpedidos]);
router.get("/:id",[updatedateMiddleware, Getpedido]);
router.post("/", [updatedateMiddleware, Postpedido]);
router.put("/:id", [updatedateMiddleware, Updatepedido]);
router.delete("/:id", [updatedateMiddleware, Deletepedido]);

export default router;