import express from "express";
import { UnidadeController } from "../controllers/unidadeController.js";

const router = express.Router();

const unidadeController = new UnidadeController();

router.get("/", unidadeController.listar);
router.get("/:id", unidadeController.obterUnidadePorId);
router.post("/", unidadeController.criarUnidade);
router.put("/:id", unidadeController.atualizarUnidade);
router.delete("/:id", unidadeController.deletarUnidade);

export default router;
