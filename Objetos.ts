export class Objeto {
    public nome: string;
    public efeito: string;

    constructor(nome: string, efeito: string) {
        this.nome = nome;
        this.efeito = efeito;
    }

    public exibirInformacoes(): void {
        console.log(`Objeto: ${this.nome}, Efeito: ${this.efeito}`);
    }
}


