import { CursoService } from "../services/cursoService.js";

export class CursoController {
    constructor() {
        this.service = new CursoService();
    }

    listar = async (req, res) => {
        try {
            const cursos = await this.service.listarCursos();
            return res.json(cursos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar cursos" });
        }
    }

    obterCursoPorId = async (req, res) => {

        try{
            const id = parseInt(req.params.id);

            const curso = await this.service.obterCursoPorId(id);
            return res.json(curso);

        }catch(error){
            return res.status(500).json({ error: "Erro ao obter curso por ID" });
        }
    }

    criarCurso = async (req, res) => {

        try{
            const dadosCurso = req.body;

            const novoCurso = await this.service.criarCurso(dadosCurso);
            return res.status(201).json(novoCurso);
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao criar curso" });
        }
    }

    atualizarCurso = async (req, res) => {

        try{
            const id = parseInt(req.params.id);
            const dadosAtualizados = req.body;

            const cursoAtualizado = await this.service.atualizarCurso(id, dadosAtualizados);
            return res.json(cursoAtualizado);
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao atualizar curso" });
        }
    }

    deletarCurso = async (req, res) => {

        try{
            const id = parseInt(req.params.id);

            await this.service.deletarCurso(id);
            return res.status(204).send();
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao deletar curso" });
        }
    }
}
