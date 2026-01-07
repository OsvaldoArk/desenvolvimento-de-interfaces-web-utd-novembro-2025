import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa{

    #curso

    constructor(id,nome,idade,cpf,senha,curso){
        super(id,nome,idade,cpf,senha);

        this.#curso = curso;
    }

    get curso(){
        return this.#curso;
    }

    set curso(curso){
        this.#curso = curso;
    }
}

export default Aluno;