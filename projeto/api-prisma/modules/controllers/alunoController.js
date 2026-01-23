import { AlunoService } from "../services/alunoService.js";

export class AlunoController {
    constructor() {
        this.service = new AlunoService();
    }

    listar = async (req, res) => {
        try {
            const alunos = await this.service.listarAlunos();
            return res.json(alunos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar alunos "+error.message });
        }
    }

    obterAlunoPorId = async (req, res) => {

        try{
            const id = parseInt(req.params.id);
            const aluno = await this.service.obterAlunoPorId(id);
            return res.json(aluno);

        }catch(error){
            return res.status(500).json({ error: "Erro ao obter aluno por ID: "+error.message });
        }
    }

    criarAluno = async (req, res) => {

        try{
            const dadosAluno = req.body;
            const novoAluno = await this.service.criarAluno(dadosAluno);
            return res.status(201).json(novoAluno);

        }catch(err){
            return res.status(500).json({ error: "Erro ao criar aluno: "+err.message });
        }
    }

    atualizarAluno = async (req, res) => {

        try{
            const id = parseInt(req.params.id);
            const dadosAtualizados = req.body;
            const alunoAtualizado = await this.service.atualizarAluno(id, dadosAtualizados);
            return res.json(alunoAtualizado);
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao atualizar aluno: "+error.message });
        }
    }

    deletarAluno = async (req, res) => {

        try{
            const id = parseInt(req.params.id);

            await this.service.deletarAluno(id);
            return res.status(204).send();
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao deletar aluno: "+error.message });
        }
    }
}

