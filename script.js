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
// function toNumber(param: number | string): number | string {
//     // 3 - Se a função receber um número, retorne um número
//     if (typeof param === 'number') {
//         return param
//     } else if (typeof param === 'string') {
//         // 4 - Se a função receber uma string, retorne um número
//         return Number(param)
//     } else {
//         // 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
//         throw ("param deve ser um número ou uma string")
//     }
// }
// console.log(toNumber(1))
// console.log(toNumber('1'))
// console.log(toNumber({}))
//Types e Interfaces
// interface InterfaceProduto {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
// //Types e Interfaces
// function preencherDados(dados: InterfaceProduto) {
//     document.body.innerHTML += `
//   <div>
//     <h2>${dados.nome}</h2>
//     <p>R$ ${dados.preco}</p>
//     <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
//   </div>
//   `;
// }
// preencherDados({
//     nome: "Computador",
//     preco: 2000,
//     teclado: false
// })
// //exercicio
// interface InterfaceEmpresa {
//     nome: string;
//     fundacao: number;
//     pais: string
// }
// interface InterfaceApiProduct {
//     nome: string;
//     preco: number;
//     descricao: string;
//     garantia: string;
//     seguroAcidentes: boolean;
//     empresaFabricante: InterfaceEmpresa;
//     empresaMontadora: InterfaceEmpresa;
// }
// async function fetchProduct() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const data = await response.json();
//     showProduct(data);
// }
// fetchProduct();
// function showProduct(data: InterfaceApiProduct) {
//     document.body.innerHTML = `
//     <div>
//       <h2>${data.nome}</h2>
//       <p>R$ ${data.preco}</p>
//       <div>
//         <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
//       </div>
//       <div>
//         <h3>Montadora: ${data.empresaMontadora.nome}</h3>
//       </div>
//     </div>
//   `;
// }
//Arrays
// const numeros = [10, 20, 30, 40, 50, 3]
// function maiorQue10(data: number[]) {
//     return data.filter(number => number > 10)
// }
// console.log(maiorQue10(numeros))
// //exercicios
// interface InterfaceCursos {
//     nome: string;
//     horas: number;
//     aulas: number;
//     gratuito: boolean;
//     tags: string[];
//     idAulas: number[];
//     nivel: 'iniciante' | 'avancado';
// }
// async function fetchCursos() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json');
//     const data = await response.json();
//     mostrarCursos(data);
// }
// fetchCursos();
// function mostrarCursos(cursos: Array<InterfaceCursos>) {
//     cursos.map(curso => {
//         return (
//             document.body.innerHTML += `
//      <div>
//        <h2>${curso.nome}</h2>
//        <p>R$ ${curso.horas}</p>
//        <div>
//          <h3>Aulas: ${curso.aulas}</h3>
//        </div>
//        <div>
//          <h3 style="color: ${curso.nivel === 'avancado' ? 'red' : 'blue'}">Nivel: ${curso.nivel}</h3>
//        </div>
//      </div>
//    `)
//     })
// }
//Any
// function normalizar(texto: any) {
//     return texto.trim().toLowerCase();
// }
// normalizar(' DeSIGN');
// normalizar(200);
//Null e Undefined
// const button = document.querySelector('button');
// const config = localStorage.getItem('config');
// if (button !== null) {
//     button.click();
// }
// if (button) {
//     button.click();
// }
// if (button) button.click();
// button?.click();
// console.log(typeof null);
// interface Product {
//     nome?: string;
// }
// const livro: Product = {};
// const jogo: Product = {
//     nome: 'Ragnarok',
// };
// jogo.nome?.toLowerCase();
// livro.nome?.toLowerCase();
//Instaceof
// class Produto {
//     nome: string;
//     preco: number
//     constructor(nome: string, preco: number) {
//         this.nome = nome;
//         this.preco = preco;
//     }
//     precoReal() {
//         return `R$ ${this.preco},00`
//     }
// }
// const livro = new Produto("O Senhor dos Anéis", 200)
// console.log(livro instanceof Produto)
// class Livro {
//     autor: string;
//     constructor(autor: string) {
//         this.autor = autor;
//     }
// }
// class Jogo {
//     jogadores: number;
//     constructor(jogadores: number) {
//         this.jogadores = jogadores;
//     }
// }
// function buscarProduto(busca: string) {
//     if (busca === 'O Hobbit') {
//         return new Livro('J. R. R. Tolkien');
//     }
//     if (busca === 'Dark Souls') {
//         return new Jogo(1);
//     }
//     return null;
// }
// const produto = buscarProduto('O Hobbit');
// if (produto instanceof Livro) {
//     produto.autor;
// }
// //exercicio 
// const link = document.getElementById('origamid')
// if (link instanceof HTMLAnchorElement) {
//     link.href = link.href.replace('http://', 'https://')
// }
// document.querySelector('video'); // HTMLVideoElement
// document.querySelector('img'); // HTMLImageElement
// const link1 = document.querySelector('a'); // HTMLAnchorElement
// const link2 = document.querySelector('#origamid'); // Element
// link1?.href;
// link2?.href; // erro no ts
// const links = document.querySelectorAll('.link')
// const randomColor = ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B']
// const randomPosition = Number((Math.random() * 6).toFixed(0))
// function modifyColorAndBorder(item: HTMLAnchorElement | HTMLButtonElement, position: number) {
//     item.style.border = '2px solid'
//     item.style.color = randomColor[position]
//     item.style.borderColor = randomColor[position]
// }
// links.forEach((link) => {
//     if (link instanceof HTMLAnchorElement || link instanceof HTMLButtonElement) {
//         modifyColorAndBorder(link, randomPosition)
//     }
// })
//Eventos e Callback
// const button = document.querySelector('button')
// function handleClick(event: PointerEvent) {
//     console.log(event.pageX)
// }
// button?.addEventListener('click', handleClick)
// function handleScroll(event: Event) {
//     console.log(event)
// }
// window.addEventListener('scroll', handleScroll)
// function ativarMenu(event: Event) {
//     console.log(event.type);
//     if (event instanceof MouseEvent) {
//         console.log(event.pageX);
//     }
//     if (event instanceof TouchEvent) {
//         console.log(event.touches[0].pageX);
//     }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchstart', ativarMenu);
// document.documentElement.addEventListener('pointerdown', ativarMenu);
// const button = document.querySelector('button')
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//     console.log(this)
// }
// button?.addEventListener('click', handleClick)
// const button = document.querySelector("button")
// function handleClick(event: MouseEvent) {
//     const element = event.currentTarget
//     if (element instanceof HTMLElement) {
//         console.log(element.innerText)
//     }
// }
// button?.addEventListener('click', handleClick)
//exercicio
// const menuMobile = document.querySelector('button#btn-mobile')
// const activeMenu = document.querySelector('nav#nav')
// function handleClick(evt: Event) {
//     const nav = document.getElementById('nav')
//     if (evt instanceof TouchEvent) {
//         activeMenu?.classList.toggle('active')
//     }
//     const active = nav?.classList.contains('active')
//     if (menuMobile) {
//         if (active) {
//             menuMobile.setAttribute('aria-expanded', 'false');
//             menuMobile.setAttribute('aria-label', 'Abrir Menu');
//         } else {
//             menuMobile.setAttribute('aria-expanded', 'true');
//             menuMobile.setAttribute('aria-label', 'Fechar Menu');
//         }
//     }
// }
// menuMobile?.addEventListener('touchstart', handleClick)
//Generics
// function retorno<T>(arg: T): T {
//     return arg;
// }
// const string = retorno<string>('Olá mundo')
// const number = retorno<number>(200)
// const boolean = retorno<boolean>(true)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const frutas = ['Maçã', 'Uva', 'Pêra', 'Banana', 'Kiwi', 'Morango', 'Manga', 'Melão', 'Melancia', 'Abacaxi']
// // function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
// //     return lista.slice(0, 5);
// // }
// function firstFive<T>(lista: T[]): T[] {
//     return lista.slice(0, 5);
// }
// console.log(firstFive<number>(numeros))
// console.log(firstFive<string>(frutas))
// function notNull<T>(arg: T) {
//     if (arg) return arg
//     else return null
// }
// notNull<string>('olá')
// function extractText<T extends HTMLElement>(el: T) {
//     return el.innerText
// }
// const link = document.querySelector('.link')
// // link.href sem o tipo no querySelector, a variável perde a referência que é um link
// // então não reconhece e não faz o autocomplete do href (exemplo)
// const link2 = document.querySelector<HTMLAnchorElement>('.link')
// // link2?.href aqui, com o tipo no querySelector, ele reconhece o link2 como sendo um link
// // o href passa a existir no link2
// // mas a forma mais segura seria:
// if (link instanceof HTMLAnchorElement) {
//     link.href
// }
// //exemplo
// async function getData<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     return await response.json();
// }
// interface Notebook {
//     nome: string;
// }
// async function handleData() {
//     const notebook = await getData<Notebook>(
//         'https://api.origamid.dev/json/notebook.json',
//     );
//     console.log(notebook.nome);
// }
//functions
// A interface de uma função é definida durante a sua declaração.
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
// somar(3, 4);
// somar(3, 4, 1);
// const subtrair = (a: number, b: number): number => a - b;
// subtrair(10, 2);
// function pintarTela(cor: string) {
//   document.body.style.background = cor;
// }
// pintarTela('black');
// // Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }
//O never é utilizado em casos onde a função gera um erro ou termina a aplicação.
// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }
// abortar('Um erro ocorreu');
// console.log('Tente novamente');
// interface Quadrado {
//     lado: number;
//     perimetro(lado: number): number;
// }
// function calcular(forma: Quadrado) {
//     forma.perimetro(3)
// }
// // Overload
// function normalizar(value: string): string;
// function normalizar(value: string[]): string[];
// function normalizar(value: string | string[]): string | string[] {
//     if (typeof value === 'string') {
//         return value.trim().toLowerCase()
//     } else {
//         return value.map(val => val.trim().toLowerCase())
//     }
// }
// console.log(normalizar('  TeStE ').toUpperCase())
// console.log(normalizar([' tEsTe dE ArRaY     ', 'TESTE DE ARRAY']))
// // exercicio
// function roundsUp(value: number): number;
// function roundsUp(value: string): string;
// function roundsUp(value: string | number): string | number {
//     if (typeof value === 'string') {
//         const transform = Math.ceil(Number(value))
//         return String(transform)
//     } else {
//         return Math.ceil(Number(value))
//     }
// }
// console.log(roundsUp(44.7))
// Type Guard e Control Flow
// interface Produto {
//     nome: string;
//     preco: number;
// }
// async function fetchProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleProduto(json);
// }
// function handleProduto(data: Produto) {
//     if ('preco' in data) {
//         document.body.innerHTML += `
//       <p>Nome: ${data.nome}</p>
//       <p>Preço: R$ ${data.preco + 100}</p>
//     `;
//     }
// }
// Unknown
// function typeGuard(value: unknown) {
//     if (typeof value === 'string') {
//         return value.toLowerCase();
//     }
//     if (typeof value === 'number') {
//         return value.toFixed();
//     }
//     if (value instanceof HTMLElement) {
//         return value.innerText;
//     }
// }
// typeGuard('Origamid');
// typeGuard(200);
// typeGuard(document.body);
//User Type Guard
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log('É instância de Array');
//   }
//   if (Array.isArray(data)) {
//     console.log('É array');
//   }
// }
//exercicio
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// async function fetchCursos() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json')
//     const json = await response.json()
//     handleCursos(json)
// }
// fetchCursos()
// // 2 - Defina a interface da API
// interface Curso {
//     nome: string;
//     horas: number;
//     tags: string[]
// }
// // 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// function isCurso(curso: unknown): curso is Curso {
//     if (
//         curso &&
//         typeof curso === 'object' &&
//         'nome' in curso &&
//         'horas' in curso &&
//         'tags' in curso
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // 4 - Use Type Guards para garantir a Type Safety do código
// function handleCursos(data: unknown) {
//     if (Array.isArray(data)) {
//         data.filter(isCurso).forEach((item) => {
//             document.body.innerHTML += `
//         <div>
//           <h2>${item.nome}</h2>
//           <p>${item.horas}</p>
//           <p>${item.tags.join(', ')}</p>
//         </div>
//       `;
//         });
//     }
// }
// Type Assertion
// const video = document.querySelector('.player') as HTMLVideoElement;
// // erro runtime, não existe volume de null
// video.volume;
// erro TS, possíveis dados devem ser compatíveis com Element | null
//const link = document.querySelector('.link') as string;
// interface Produto {
//     nome: string;
//     preco: number;
// }
// async function fetchProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     return response.json() as Promise<Produto>;
// }
// // Podemos usar o as em diferentes locais.
// async function handleProduto1() {
//     const produto = await fetchProduto();
//     produto.nome;
// }
// async function handleProduto2() {
//     const produto = (await fetchProduto()) as Produto;
//     produto.nome;
// }
// async function handleProduto3() {
//     const produto = await fetchProduto();
//     (produto as Produto).nome;
// }
// const video = document.querySelector('video')!;
// // erro runtime, não existe volume de null
// video.volume;
// // erro runtime
// document.querySelector('a')!.href = 'https://www.origamid.com';
// // sintaxes alternativas
// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector('.player');
// const video3 = document.querySelector<HTMLVideoElement>('.player');
// const video4 = document.querySelector('.player');
// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;
