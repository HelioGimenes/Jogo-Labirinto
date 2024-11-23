export class Arma {
    public nome: string;
    public dano: number;

    constructor(nome: string, dano: number) {
        this.nome = nome;
        this.dano = dano;
    }

    public exibirInformacoes(): void {
        console.log(`Arma: ${this.nome}, Dano: ${this.dano}`);
    }
}



