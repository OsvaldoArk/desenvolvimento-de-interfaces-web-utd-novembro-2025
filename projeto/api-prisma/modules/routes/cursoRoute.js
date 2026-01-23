import express from "express";
import { CursoController } from "../controllers/cursoController.js";

const router = express.Router();

const cursoController = new CursoController();

router.get("/", cursoController.listar);
router.get("/:id", cursoController.obterCursoPorId);
router.post("/", cursoController.criarCurso);
router.put("/:id", cursoController.atualizarCurso);
router.delete("/:id", cursoController.deletarCurso);
export default router;
