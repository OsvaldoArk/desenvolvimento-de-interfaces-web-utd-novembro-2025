const filmes = [
    {id:1,titulo:"auto da compadecida",nota:9.5},
    {id:2,titulo:"lisbela e o prisioneiro",nota:10},
    {id:3,titulo:"o homem do futuro",nota:9.0},
    {id:4,titulo:"paraísos artificiais",nota:8.0},
    {id:5,titulo:"o homem que copiava",nota:8.5}
]
/*
for(let filme of filmes){
    console.log(filme.titulo);
}
*/
filmes.forEach(filme=>{console.log(`${filme.titulo}, ${filme.nota}`)});

//filmes.forEach(({titulo,nota})=>{console.log(`${titulo}, ${nota}`)});