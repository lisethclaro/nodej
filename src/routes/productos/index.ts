import express from 'express';

import{
    Getproductos,
    Getproducto,
    Postproducto,
    Updateproducto,
    Deleteproducto

} from '../../controller/productos';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, Getproductos]);
router.get("/:id",[updatedateMiddleware, Getproducto]);
router.post("/", [updatedateMiddleware, Postproducto]);
router.put("/:id", [updatedateMiddleware, Updateproducto]);
router.delete("/:id", [updatedateMiddleware, Deleteproducto]);

export default router;