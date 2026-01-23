import { UnidadeService } from "../services/unidadeService.js";

export class UnidadeController {
    constructor() {
        this.service = new UnidadeService();
    }

    listar = async (req, res) => {
        try {
            const unidades = await this.service.listarUnidades();
            return res.json(unidades);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar unidades" });
        }
    }

    obterUnidadePorId = async (req, res) => {

        try{
            const id = parseInt(req.params.id);

            const unidade = await this.service.obterUnidadePorId(id);
            
            return res.json(unidade);

        }catch(error){
            return res.status(500).json({ error: "Erro ao obter unidade por ID" });
        }
    }
    
    criarUnidade = async (req, res) => {

        try{
            const dadosUnidade = req.body;

            const novaUnidade = await this.service.criarUnidade(dadosUnidade);
            return res.status(201).json(novaUnidade);
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao criar unidade" });
        }
    }

    atualizarUnidade = async (req, res) => {

        try{
            const id = parseInt(req.params.id);
            const dadosAtualizados = req.body;

            const unidadeAtualizada = await this.service.atualizarUnidade(id, dadosAtualizados);
            return res.json(unidadeAtualizada);
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao atualizar unidade" });
        }
    }

    deletarUnidade = async (req, res) => {

        try{
            const id = parseInt(req.params.id);

            await this.service.deletarUnidade(id);
            return res.status(204).send();
            
        }catch(error){
            return res.status(500).json({ error: "Erro ao deletar unidade" });
        }
    }
}
