/*
Objetivo 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
 - passo 2 - dar um jeito de identificar o clique do usuário na seta avancar
 - passo 3 - fazer aparecer o próximo cartao da lista
 - passo 4 - buscar o cartao que esta selecionado e esconder

Objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
 - passo 3 - fazer aparecer o cartao anterior da lista
 - passo 4 - buscar o cartao que esta selecionado e esconder
 */

//  Objetivo 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
//  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar OBS CTRL + ponto e virgula para comentar descomentar

const botaoAvancar = document.getElementById("btn-avancar");
const botaoVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
// - passo 2 - dar um jeito de identificar o clique do usuário na seta avancar

botaoAvancar.addEventListener("click", function() {

    if(cartaoAtual === cartoes.length - 1) return;

    // passo 4 - buscar o cartao que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // passo 3 - fazer aparecer o próximo cartao da lista
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

});

// - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar

botaoVoltar.addEventListener("click", function() {

    if(cartaoAtual === 0) return;

    // passo 4 - buscar o cartao que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // passo 3 - fazer aparecer o próximo cartao da lista
    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});