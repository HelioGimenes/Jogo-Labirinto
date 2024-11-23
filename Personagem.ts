import { Objeto } from "./Objetos";
import { Arma } from "./Armas";
import { Inimigo } from "./Inimigo";

export class Personagem {
    public nome: string;
    public vida: number;
    private energia: number;

    constructor(nome: string) {
        this.nome = nome;
        this.vida = 150; 
        this.energia = 50; 
    }

    public andar(): void {
        if (this.energia >= 10) {
            this.energia -= 10;
            console.log(`${this.nome} andou. Energia restante: ${this.energia}`);
        } else {
            console.log(`${this.nome} está sem energia suficiente para andar.`);
        }
    }

    public pegarItem(item: Objeto): void {
        console.log(`${this.nome} pegou ${item.nome}.`);
    }

    public usarItem(item: Objeto): void {
        if (item.nome === "Poção de Vida") {
            this.vida = Math.min(this.vida + 50, 150); 
            console.log(`${this.nome} usou ${item.nome} e recuperou vida. Vida atual: ${this.vida}`);
        } else if (item.nome === "Poção de Energia") {
            this.energia = Math.min(this.energia + 30, 50); 
            console.log(`${this.nome} usou ${item.nome} e recuperou energia. Energia atual: ${this.energia}`);
        } else {
            console.log(`${this.nome} tentou usar ${item.nome}, mas nada aconteceu.`);
        }
    }

    public atacar(inimigo: Inimigo): void {
        console.log(`${this.nome} atacou ${inimigo.nome} com as mãos, causando 10 de dano.`);
        inimigo.receberDano(10);
    }

    public atacarComArma(inimigo: Inimigo, arma: Arma): void {
        console.log(`${this.nome} atacou ${inimigo.nome} com ${arma.nome}, causando ${arma.dano} de dano.`);
        inimigo.receberDano(arma.dano);
    }

    public receberDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}
