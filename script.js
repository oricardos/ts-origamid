"use strict";
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
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
//2
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
