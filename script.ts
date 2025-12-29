//Annotation
// let produto: string = "Livro";
// let preco: number = 200;

// const carro: {
//     marca: string;
//     portas: number;
// } = {
//     marca: "Toyota",
//     portas: 5
// }

// //Inference
// let produto2 = "Livro";
// let preco2 = 200;

// const carro2 = {
//     marca: "Toyota",
//     portas: 5
// }

// const barato = preco < 400 ? true : "Produto caro";

// //-------

// function somar(a: number, b: number) {
//     return a + b;
// }

// somar(3, 10);

// const nintendo = {
//     nome: "Switch",
//     preco: '2000',
// }

// function transformarPreco(produto: { nome: string; preco: string }) {
//     produto.preco = `R$${produto.preco},00`;
//     return produto;
// }

// const produtoTransformado = transformarPreco(nintendo);
// console.log(produtoTransformado);

// EXERCÍCIOS
//1
// function normalizarTexto(texto: string) {
//     return texto.trim().toLowerCase();
// }

// //2
// const input = document.querySelector('input');

// const total = localStorage.getItem('total');
// if (input && total) {
//     input.value = total;
//     calcularGanho(Number(input.value));
// }

// function calcularGanho(value: number) {
//     const p = document.querySelector('p');
//     if (p) {
//         p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
//     }
// }

// function totalMudou() {
//     if (input) {
//         localStorage.setItem('total', input.value);
//         calcularGanho(Number(input.value));
//     }
// }

// if (input) {
//     input.addEventListener('keyup', totalMudou);
// }

//string, number e boolean
// const frase: string = 'Front End';
// const preco: number = 500;
// const condi: boolean = preco > 100;

// console.log(typeof frase)
// console.log(typeof null, `null`)

// Union Types
// let total: string | number = 200;
// total = '300';

// function isNumber(value: string | number): boolean {
//     if (typeof value === 'number') {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isNumber(total))


//Exercício
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
function toNumber(param: number | string): number | string {
    // 3 - Se a função receber um número, retorne um número
    if (typeof param === 'number') {
        return param
    } else if (typeof param === 'string') {
        // 4 - Se a função receber uma string, retorne um número
        return Number(param)
    } else {
        // 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
        throw ("param deve ser um número ou uma string")
    }
}

console.log(toNumber(1))
console.log(toNumber('1'))
// console.log(toNumber({}))