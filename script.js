//01 - Criar uma variavel chamada 'nome' e mostre no console: "Olá, meu nome é... " Usando TemplateString

// let nome = "Marcos";
// console.log(`Olá, meu nome é ${nome}.`);

//02 - Crie duas variaveis de números e mostre a soma

// let num1 = 20;
// let num2 = 50;

// console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)

//03 - calcule o dobro de um número armazenado em uma variavel

// let num3 = 4;

// console.log(`O dobro do número ${num3} é ${num3 + num3}`);

//04 - verifique se um numero é par ou impar

// let num4 = 3;
// if (num4 % 2 === 0 ) {
//     console.log(`O numero ${num4} é PAR`)
// }else {
//     console.log(`O numero ${num4} é IMPAR`)
// }


//05 - Verificar se uma pessoa é maior de idade

// let idade = 19;

// if (idade >= 18) {
//     console.log(`O serumaninho tem ${idade} ele é MAIOR de IDADE`);
// }else {
//     console.log(`O serumaninho tem ${idade} ele é MENOR de IDADE`);
// }

//operador ternario
const idade2 = 16;



//06 - Receba uma nota de (0 - 10) e exiba: "APROVADO"(>7), "RECUPERAÇÃO"(>=5 || <=6.9) ou "REPROVADO" (< 4.9)

let media = 11;

if (media >= 7 && media <= 10) {
    console.log(`A média do aluno foi de ${media} ele foi APROVADO!!! `);
}else if (media >= 5 && media <= 6.9) {
    console.log(`A média do aluno foi de ${media} ele esta de RECUPERAÇÃO!!!`);
} else if (media <= 4.9 && media >= 0){
    console.log(`A média do aluno foi de ${media} ele foi REPROVADO!?!?!?!`);
}else {
    console.log(`A nota informada ${media} é inválida`);
}