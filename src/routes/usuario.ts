import { Router } from "express";
import { getUsuarios, crearUsuario } from '../controllers/usuariosController';

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', crearUsuario);

export default router;
