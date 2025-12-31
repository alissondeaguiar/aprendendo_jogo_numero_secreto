//let peso = prompt (`Qual seu peso em kg?`);
//let altura = prompt (`Qual sua altura em metros?`);
//function calcularIMC (peso,altura)  {
//    let imc = (peso / (altura * altura));
//    return imc
//}
//let resultado = calcularIMC(peso,altura);
//console.log (`Seu IMC é ${resultado}`);

//let numero = prompt (`Digite um número para calcular o fatorial:`);
//function calcularFatorial (numero) {
//
//   if (numero == 0 || numero == 1) {
//        return 1;
//    } else {
//        return numero * calcularFatorial (numero - 1);
//    }
//}
// lett resultado = calcularFatorial (numero);
// console.log (`O fatorial de ${numero} é ${resultado}`);

//let dolar = prompt (`Qual a cotação do dólar hoje?`);
//let cotacao = 4.8
//
//function converterDolarParaReal (dolar,cotacao) {
//   let resultado = dolar * cotacao;
//    return resultado;
//}
//let resultado = converterDolarParaReal (dolar,cotacao);
//console.log (`O valor em reais é R$ ${resultado}`);

//let altura = 5;
//let largura = 10;
//function calcularPerimetro (altura,largura) {
//    let perimetro = 2 * (altura + largura);
//    return perimetro;
//}
//let resultado = calcularPerimetro (altura,largura);
//console.log (`O perímetro é ${resultado}`);

//let valor1 = prompt (`De Qual número você quer saber a tabuada?`);
//let valor2 = prompt (`Até qual número você quer calcular a tabuada?`);

//function fazerTabuada (valor1, valor2) {
//    i = 0
//    while (i != valor2) {
//        valorTabuada = valor1 * i;
//        i++;
//        console.log (`${valorTabuada}`);
//        }
//        //console.log (`cabou?`)
//    }
//fazerTabuada (valor1,valor2);

console.log (`Começo`);
let numero = 0;
let i = 0;
while (i <7) {
numero = parseInt(Math.random() *60 +1);
i++;
console.log (`Número sorteado é ${numero}`);
}
console.log (`Fim do sorteio`);


