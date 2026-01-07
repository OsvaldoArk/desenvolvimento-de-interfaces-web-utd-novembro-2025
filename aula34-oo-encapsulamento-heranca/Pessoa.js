class Pessoa{
    id
    nome
    idade
    #cpf
    #senha

    constructor(id,nome,idade,cpf,senha){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    //métodos acessores.
    get cpf(){
        return this.#cpf;
    }

    set cpf(valorRecebido){
        this.#cpf = valorRecebido;
    }

    set senha(senha){
        this.#senha = senha;
    }
}

export default Pessoa;