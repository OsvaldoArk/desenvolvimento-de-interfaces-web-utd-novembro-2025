import prisma from "../../shared/infra/prisma/index.js";

export class AlunoService {
    
    async #validarExistencia(id) {
        
        const aluno = await prisma.user.findUnique({
            where: { id: id },
            select:{
                id: true,
                name: true,
                email: true,
                unidade: {
                    select: {
                        descricao: true
                    }
                },
                cursos: {
                    select: {
                        curso: {
                            select: {
                                descricao: true
                            }
                        }
                    }
                }
            }
        });

        if (!aluno) {
            throw new Error(`Aluno com ID ${id} não encontrado.`);
        }
        return aluno;
    }

    async criarAluno(aluno){

        return await prisma.user.create({
            data: {
                name: aluno.name,
                email: aluno.email,
                unidade: { 
                    connect: { id: Number(aluno.unidadeId) } 
                },
                cursos: (aluno.cursosId && Array.isArray(aluno.cursosId) && aluno.cursosId.length > 0) 
                    ? {
                        create: aluno.cursosId.map(id => ({
                            curso: { 
                                connect: { id: Number(id) } 
                            }
                        }))
                    } 
                    : undefined
            },
            include: {
                unidade: true,
                cursos: {
                    include: {
                        curso: true
                    }
                }
            }
        });
    }

    async listarAlunos(){

        return await prisma.user.findMany({
            select:{
                id: true,
                name: true,
                email: true,
                unidade: {
                    select: {
                        descricao: true
                    }
                },
                cursos: {
                    select: {
                        curso: {
                            select: {
                                descricao: true
                            }
                        }
                    }
                }
            }
        });
    }

    async obterAlunoPorId(id){

        return  await this.#validarExistencia(id);
    }

    async atualizarAluno(id, dadosAtualizados){

        await this.#validarExistencia(id);

        return await prisma.user.update({
            where: { id: id },
            data: dadosAtualizados
        });
    }

    async deletarAluno(id){

        await this.#validarExistencia(id);

        return await prisma.user.delete({
            where: { id: id }
        });
    }
}
