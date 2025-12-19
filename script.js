"use strict";
//Annotation
let produto = "Livro";
let preco = 200;
const carro = {
    marca: "Toyota",
    portas: 5
};
//Inference
let produto2 = "Livro";
let preco2 = 200;
const carro2 = {
    marca: "Toyota",
    portas: 5
};
const barato = preco < 400 ? true : "Produto caro";
//-------
function somar(a, b) {
    return a + b;
}
somar(3, 10);
const nintendo = {
    nome: "Switch",
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = `R$${produto.preco},00`;
    return produto;
}
const produtoTransformado = transformarPreco(nintendo);
console.log(produtoTransformado);
