import express from 'express';

import{
    Getusuarios,
    Getusuario,
    Postusuario,
    Updateusuario,
    Deleteusuario

} from '../../controller/usuarios';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, Getusuarios]);
router.get("/:id",[updatedateMiddleware, Getusuario]);
router.post("/", [updatedateMiddleware, Postusuario]);
router.put("/:id", [updatedateMiddleware, Updateusuario]);
router.delete("/:id", [updatedateMiddleware, Deleteusuario]);

export default router;