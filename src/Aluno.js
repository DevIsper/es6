// Aluno.js
export default class Aluno {
    #nome;
    #nota;

    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }

    get nota() {
        return this.#nota;
    }

    set nota(value) {
        this.#nota = value;
    }
}
