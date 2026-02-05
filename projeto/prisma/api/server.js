import express from "express";
import unidadeRota from "./modules/routes/unidadeRoute.js";
import cursoRota from "./modules/routes/cursoRoute.js";
import alunoRota from "./modules/routes/alunoRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/unidades", unidadeRota);
app.use("/api/cursos", cursoRota);
app.use("/api/alunos", alunoRota);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});