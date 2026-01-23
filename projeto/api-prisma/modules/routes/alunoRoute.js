import express from "express";
import { AlunoController } from "../controllers/alunoController.js";

const router = express.Router();

const alunoController = new AlunoController();
router.get("/", alunoController.listar);
router.get("/:id", alunoController.obterAlunoPorId);
router.post("/", alunoController.criarAluno);
router.put("/:id", alunoController.atualizarAluno);
router.delete("/:id", alunoController.deletarAluno);

export default router;
