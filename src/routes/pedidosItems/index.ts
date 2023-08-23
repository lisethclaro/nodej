import express from 'express';

import{
    GetpedidosItems,
    GetpedidoItems,
    PostpedidoItems,
    UpdatepedidoItems,
    DeletepedidoItems

} from '../../controller/pedidosItems';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, GetpedidosItems]);
router.get("/:id",[updatedateMiddleware, GetpedidoItems]);
router.post("/", [updatedateMiddleware, PostpedidoItems]);
router.put("/:id", [updatedateMiddleware, UpdatepedidoItems]);
router.delete("/:id", [updatedateMiddleware, DeletepedidoItems]);

export default router;