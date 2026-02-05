import { createCliente,
         getCliente,
         clientes,
         updateCliente,
         deleteCliente
        } from '../servicos/servico.js';
import express from 'express';
let router = express.Router();

router.post('/cliente', createCliente);
router.get('/cliente/:id', getCliente);
router.get('/clientes', clientes);
router.put('/cliente', updateCliente);
router.delete('/cliente/:id', deleteCliente);

export default router;