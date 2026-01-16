const filmes = [
    {id:1,titulo:"auto da compadecida",nota:9.5},
    {id:2,titulo:"paraísos artificiais",nota:8.0},
    {id:3,titulo:"o Homem do futuro",nota:9.0},
    {id:4,titulo:"o homem que copiava",nota:8.5},
    {id:5,titulo:"lisbela e o prisioneiro",nota:10}
]

const melhoresFilmes = filmes.filter(filme => filme.nota >= 9)
                             .sort((anterior,proximo)=>anterior.nota - proximo.nota);

//console.log(melhoresFilmes);

const filtro = filmes.filter(f=> f.titulo.toLocaleLowerCase()
                                        .includes('homem'))
                                        .sort((a,b)=>a.nota - b.nota)
                                        .map(filme=>filme.titulo);

console.log(filtro);