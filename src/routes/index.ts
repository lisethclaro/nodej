import express from 'express';

import categoriasRouters from './categorias';
import clientesRouters from './clientes';
import pedidosRouters from './pedidos';
import pedidosItemsRouters from './pedidosItems';
import productosRouters from './productos';
import usuariosRouters from './usuarios';

const router = express.Router();

router.use("/categorias", categoriasRouters);
router.use("/clientes", clientesRouters);
router.use("/pedidos", pedidosRouters);
router.use("/pedidosItems", pedidosItemsRouters);
router.use("/productos", productosRouters);
router.use("/usuarios", usuariosRouters);

export default router;