import express from 'express';

import{
    Getcategorias,
    Getcategoria,
    Postcategoria,
    Updatecategoria,
    Deletecategoria

} from '../../controller/categorias';
import { updatedateMiddleware } from '../../middleware/updateDate';

const router = express.Router();

router.get("/", [updatedateMiddleware, Getcategorias]);
router.get("/:id",[updatedateMiddleware, Getcategoria]);
router.post("/", [updatedateMiddleware, Postcategoria]);
router.put("/:id", [updatedateMiddleware, Updatecategoria]);
router.delete("/:id", [updatedateMiddleware, Deletecategoria]);

export default router;