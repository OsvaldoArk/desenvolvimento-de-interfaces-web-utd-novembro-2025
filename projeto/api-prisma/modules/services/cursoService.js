import prisma from "../../shared/infra/prisma/index.js";

export class CursoService {
    
    async criarCurso(curso){
        return await prisma.curso.create({
            data: curso
        });
    }

    async listarCursos(){
        return await prisma.curso.findMany();
    }

    async obterCursoPorId(id){
        return await prisma.curso.findUnique({
            where: { id: id }
        });
    }

    async atualizarCurso(id, dadosAtualizados){

        const cursoExistente = await this.obterCursoPorId(id);
        
        if (!cursoExistente) {
            throw new Error(`Curso com ID ${id} não encontrado.`);
        }

        return await prisma.curso.update({
            where: { id: id },
            data: dadosAtualizados
        });
    }

    async deletarCurso(id){

        const cursoExistente = await this.obterCursoPorId(id);
        
        if (!cursoExistente) {
            throw new Error(`Curso com ID ${id} não encontrado.`);
        }

        return await prisma.curso.delete({
            where: { id: id }
        });
    }
}
