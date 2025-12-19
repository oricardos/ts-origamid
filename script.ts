//Annotation
let produto: string = "Livro";
let preco: number = 200;

const carro: {
    marca: string;
    portas: number;
} = {
    marca: "Toyota",
    portas: 5
}

//Inference
let produto2 = "Livro";
let preco2 = 200;

const carro2 = {
    marca: "Toyota",
    portas: 5
}

const barato = preco < 400 ? true : "Produto caro";

//-------

function somar(a: number, b: number) {
    return a + b;
}

somar(3, 10);

const nintendo = {
    nome: "Switch",
    preco: '2000',
}

function transformarPreco(produto: { nome: string; preco: string }) {
    produto.preco = `R$${produto.preco},00`;
    return produto;
}

const produtoTransformado = transformarPreco(nintendo);
console.log(produtoTransformado);