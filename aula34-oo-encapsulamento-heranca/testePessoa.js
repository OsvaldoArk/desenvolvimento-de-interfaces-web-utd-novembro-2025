import Aluno from './Aluno.js';
import Pessoa from './Pessoa.js'

const p = new Pessoa(1,'Alicia',29,'123.456.789-00','htinha29');

const a = new Aluno(2,'Fernando',21,'111.222.333-43','EuSouOBatiman','Frontend');

p.cpf = '987.654.321-99';

p.senha = 'XdS87W!q27l';

a.endereco = "meireles 1200";

console.log(p);

console.log(a);