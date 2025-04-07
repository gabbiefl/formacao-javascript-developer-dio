/* Faça um programa que receba a média de um aluno e imprima o seguinte:

Caso a média seja < 5 imprima "REP";
Caso a média seja >= 5 e < 7 imprima "REC";
Caso a média seja >7 imprima "APR". */

const readlineSync = require('readline-sync');

let media = parseFloat(readlineSync.question(''))

if (media < 5) {
    console.log('REP');
} else if (media >= 5 && media < 7) {
    console.log('REC');
} else {
    console.log('APR');
}