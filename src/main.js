// main.js
import Aluno from './Aluno.js';

const Gabriel = new Aluno("Gabriel", 10);
const Daniel = new Aluno("Daniel", 8);
const Maria = new Aluno("Maria", 9);
const Clara = new Aluno("Clara", 5);
const Rafael = new Aluno("Rafael", 6);

const arrayObj = [Gabriel, Daniel, Maria, Clara, Rafael];
let listaAlunosMaiorQueSeis = [];

arrayObj.forEach(a => {
    a.nota >= 6 ? listaAlunosMaiorQueSeis.push(a) : null;
})

listaAlunosMaiorQueSeis.forEach(a => {console.log(a.nome)})
