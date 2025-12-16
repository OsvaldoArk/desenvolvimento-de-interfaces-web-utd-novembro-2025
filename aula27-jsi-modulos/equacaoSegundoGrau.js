const funcao = (a,b,c) => {

    const delta = b**2 - (4*a*c);

    if(delta===0){
        const raiz = (-b + Math.sqrt(delta)) / 2*a;

        console.log(`o delta é igual a zero e a equação possuí duas raízes iguais a ${raiz}`);
        return;
    }

    if(delta<0){
        console.log(`a equação não possuí resolução no domínio dos reais, pois o delta é negativo`);
        return;
    }

    if(delta>0){
        const x1 = (-b + Math.sqrt(delta)) / (2*a);

        const x2 = (-b - Math.sqrt(delta)) / (2*a);

        console.log(`o delta é maior do que zero e a equação possuí duas raízes x1= ${x1} e x2= ${x2}`);
        return;
    }

}

export default funcao;