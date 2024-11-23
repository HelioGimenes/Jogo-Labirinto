import { Personagem } from "./Personagem";
import { Inimigo } from "./Inimigo";
import { Arma } from "./Armas";
import { Objeto } from "./Objetos";

// Criando um personagem
const heroi = new Personagem("Herói");

// Criando um inimigo
const goblin = new Inimigo("Goblin", 60, 15);

// Criando uma arma
const espada = new Arma("Espada Longa", 30);

// Criando itens
const pocaoVida = new Objeto("Poção de Vida", "Recupera 50 de vida.");
const pocaoEnergia = new Objeto("Poção de Energia", "Recupera 25 de energia.");

// Início do jogo
console.log("O herói acorda em um labirinto sombrio...");
heroi.andar();
heroi.pegarItem(pocaoVida);
heroi.usarItem(pocaoVida);

// Primeiro encontro com inimigo
console.log("Um goblin aparece!");
goblin.atacar(heroi);
heroi.atacar(goblin);

// O herói encontra uma espada
console.log("O herói encontra uma espada no chão.");
heroi.atacarComArma(goblin, espada);

// Usando uma poção de energia
console.log("O herói encontra uma poção de energia.");
heroi.usarItem(pocaoEnergia);

// Final do jogo
if (goblin.vida <= 0) {
    console.log("O herói derrotou o goblin e escapou do labirinto!");
} else {
    console.log("O herói não conseguiu derrotar o goblin. Fim de jogo.");
}
