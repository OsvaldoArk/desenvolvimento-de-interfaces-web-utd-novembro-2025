import api from "./api";

export const getAlunos = async () => await api.get('/alunos');
export const getAlunoById = async id => await api.get(`/alunos/${id}`);
export const postAluno = async aluno => await api.post('/alunos',aluno);
export const putAluno = async (id,aluno) => await api.put(`/alunos/${id}`,aluno);
export const deleteAluno = async id => await api.delete(`/alunos/${id}`);