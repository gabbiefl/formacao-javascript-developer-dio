/* Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número impar. */

const readlineSync = require("readline-sync");

let maiorPar = 0;
let menorImpar = 1;
let numeros = [];

let quantidadeNumeros = parseInt(
  readlineSync.question("Digite a quantidade de números: ")
);

for (let index = 0; index < quantidadeNumeros; index++) {
  num = parseInt(readlineSync.question("Digite um número: "));
  numeros.push(num);
  if (num % 2 == 0) {
    if (num > maiorPar) {
      maiorPar = num;
    }
  } else {
    if (num < menorImpar) {
      menorImpar = num;
    }
  }
}

console.log(`Maior número par: ${maiorPar}`);
console.log(`Menor número impar: ${menorImpar}`);
