"use strict";

var _Aluno = _interopRequireDefault(require("./Aluno.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// main.js

var Gabriel = new _Aluno.default("Gabriel", 10);
var Daniel = new _Aluno.default("Daniel", 8);
var Maria = new _Aluno.default("Maria", 9);
var Clara = new _Aluno.default("Clara", 5);
var Rafael = new _Aluno.default("Rafael", 6);
var arrayObj = [Gabriel, Daniel, Maria, Clara, Rafael];
var listaAlunosMaiorQueSeis = [];
arrayObj.forEach(function (a) {
  a.nota >= 6 ? listaAlunosMaiorQueSeis.push(a) : null;
});
listaAlunosMaiorQueSeis.forEach(function (a) {
  console.log(a.nome);
});