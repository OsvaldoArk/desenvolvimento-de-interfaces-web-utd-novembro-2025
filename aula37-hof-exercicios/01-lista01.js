const filmes = [
{id: 1, titulo: 'lisbela e o prisioneiro', lancamento: 2003 , indicacao: 'livre', duracao: '106 minutos', genero: 'Comédia', nota: 7.6},
{id: 2, titulo: 'central do brasil', lancamento:1998 , indicacao: '12' , duracao: '110 minutos', genero: 'Drama', nota: 8.0},
{id: 3, titulo: 'o homem do futuro', lancamento: 2011 , indicacao: '12' , duracao: '106 minutos', genero: 'Comédia', nota: 7.0},
{id: 4, titulo: 'bicho de sete cabeças', lancamento: 2000 , indicacao: '14' , duracao: '74 minutos', genero: 'Drama', nota: 7.7},
{id: 5, titulo: 'o homem que copiava', lancamento: 2003, indicacao: '14', duracao: '123 minutos', genero: 'Drama', nota: 7.6},
{id: 6, titulo: 'o homem do ano', lancamento: 2003, indicacao: '16', duracao: '105 minutos', genero: 'Drama', nota: 7.1},
{id: 7, titulo: 'o Auto da compadecida', lancamento: 2000, indicacao: 'livre', duracao: '104 minutos', genero: 'Comédia', nota: 8.6},
{id: 8, titulo: 'a mulher invisível', lancamento: 2009, indicacao: '14', duracao: '105 minutos', genero: 'Comédia', nota: 6.3},
{id: 9, titulo: 'memórias póstumas de brás cubas', lancamento: 2001 , indicacao: '12', duracao: '101 minutos', genero: 'Comédia', nota: 6.9},
{id: 10, titulo: 'ainda estou aqui', lancamento: 2024, indicacao: '14', duracao: '137 minutos', genero: 'Drama', nota: 8.1}
]

const formatarDuracao = tempo => `${Number.parseInt(tempo/60)}h ${tempo % 60}min`;

//const format = filmes.map(f => (f = {...f,duracao:formatarDuracao(Number.parseInt(f.duracao))}));
//console.log(format);

filmes.forEach(({titulo,duracao}) => console.log(`${titulo}  ${formatarDuracao(Number.parseInt(duracao))}`));

