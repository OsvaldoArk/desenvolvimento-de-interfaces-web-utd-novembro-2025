import prisma from "../../shared/infra/prisma/index.js";

export class UnidadeService {
    
    async criarUnidade(unidade){
        return await prisma.unidade.create({
            data: unidade
        });
    }

    async listarUnidades(){
        return await prisma.unidade.findMany();
    }

    async obterUnidadePorId(id){
        return await prisma.unidade.findUnique({
            where: { id: id }
        });
    }

    async atualizarUnidade(id, dadosAtualizados){

        const unidadeExistente = await this.obterUnidadePorId(id);
        
        if (!unidadeExistente) {
            throw new Error(`Unidade com ID ${id} não encontrada.`);
        }

        return await prisma.unidade.update({
            where: { id: id },
            data: dadosAtualizados
        });
    }

    async deletarUnidade(id){

        const unidadeExistente = await this.obterUnidadePorId(id);
        
        if (!unidadeExistente) {
            throw new Error(`Unidade com ID ${id} não encontrada.`);
        }

        return await prisma.unidade.delete({
            where: { id: id }
        });
    }
}
