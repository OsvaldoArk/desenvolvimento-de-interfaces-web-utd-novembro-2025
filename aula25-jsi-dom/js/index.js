let contador = 1;


document.getElementById('bandaId').addEventListener('blur',(evento)=>{
    
    const input = evento.target

    const {name,value} = evento.target;
    
    const ranking = document.getElementById('ranking');
    
    const item = document.createElement('li');
    
    if(contador === 1){
        item.setAttribute('style','color:gold');

        input.setAttribute('placeholder','digite o vice campeão');
    }
    
    if(contador === 2){
        item.setAttribute('style','color:silver');

        input.setAttribute('placeholder','digite o terceiro colocado');
    }

    if(contador === 3){
        item.setAttribute('style','color:brown');

        input.setAttribute('placeholder','digite o nome da banda');
    }
    
    item.innerText = value;
    
    ranking.appendChild(item)
    
    evento.target.value = ''

    contador++;
});