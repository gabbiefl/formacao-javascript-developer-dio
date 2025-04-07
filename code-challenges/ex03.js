/* Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo, primeiro receba o valor do salário bruto (valorSalario) e adicional dos benefícios (valorBeneficios). Por fim, o salário a ser transferido é calculado da seguinte maneira: 

(valorSalario - valorImpostos) + valorBeneficios

Para calcular o valorImpostos, seguem as aliquotas (baseadas no valor do salário bruto):

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00% */
const readlineSync = require("readline-sync");

function calcularImpostos(salario) {
    let aliquota;

    if (salario <= 1100) {
        aliquota = 0.05;
    } else if (salario <= 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }

    return aliquota * salario
}

let valorSalario = parseFloat(readlineSync.question());
let valorBeneficios = parseFloat(readlineSync.question());

let valorImpostos = calcularImpostos(valorSalario);
let salarioFinal = (valorSalario - valorImpostos) + valorBeneficios;

console.log(salarioFinal.toFixed(2));

