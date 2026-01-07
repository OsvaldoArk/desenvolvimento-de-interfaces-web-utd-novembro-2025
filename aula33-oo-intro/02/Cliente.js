class Cliente{

    id
    nome
    tipo
    desconto

    constructor(id,nome,tipo){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        switch(this.tipo){
            case 'bronze' : this.desconto = 0.03; break;
            case 'prata' : this.desconto = 0.05; break;
            case 'ouro' : this.desconto = 0.1; break;
            default : this.desconto = 0;
        }
    }

    calculaPrecoFinal(produto){
        let precoFinal = produto.preco - (produto.preco * this.desconto);

        return precoFinal;
    }

    promoverCliente(){
        if(this.tipo === "bronze"){
            this.tipo = "prata";
            this.desconto = 0.05;
            return;
        }

        if(this.tipo === "prata"){
            this.tipo = "ouro";
            this.desconto = 0.1;
            return;
        }

        if(this.tipo === "ouro"){
            throw new Error("O cliente não pode ser promovido");
        }
    }
}

export default Cliente;