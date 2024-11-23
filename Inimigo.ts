import { Personagem } from "./Personagem";

export class Inimigo {
    public nome: string;
    public vida: number;
    public dano: number;

    constructor(nome: string, vida: number, dano: number) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
    }

    public atacar(alvo: Personagem): void {
        console.log(`${this.nome} atacou ${alvo.nome}, causando ${this.dano} de dano.`);
        alvo.receberDano(this.dano);
    }

    public receberDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}
