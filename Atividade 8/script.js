let idade = 0;
let sexo = null;
let opiniao = null;
let pessoas = 0;
let totIdade = 0;
let mediaIdade = 0;
let maisVelha = 0;
let maisNova = 0;
let qtdPessimo = 0;
let qtdOtimo = 0;
let qtdBom = 0;
let porcOtimo = 0;
let porcBom = 0;
let numMulheres = 0;
let numHomens = 0;

const formPesquisa = document.getElementById("formPesquisa");
const resultadosDiv = document.getElementById("resultados");
const mediaIdadeEl = document.getElementById("mediaIdade");
const maisVelhaEl = document.getElementById("maisVelha");
const maisNovaEl = document.getElementById("maisNova");
const qtdPessimoEl = document.getElementById("qtdPessimo");
const porcOtimoEl = document.getElementById("porcOtimo");
const porcBomEl = document.getElementById("porcBom");
const numHomensEl = document.getElementById("numHomens");
const numMulheresEl = document.getElementById("numMulheres");

function calcularResultados() {
    mediaIdade = totIdade / pessoas;
    porcBom = (qtdBom / pessoas) * 100;
    porcOtimo = (qtdOtimo / pessoas) * 100;

    mediaIdadeEl.textContent = `Média de Idade: ${mediaIdade.toFixed(2)}`;
    maisVelhaEl.textContent = `Idade da Pessoa Mais Velha: ${maisVelha}`;
    maisNovaEl.textContent = `Idade da Pessoa Mais Nova: ${maisNova}`;
    qtdPessimoEl.textContent = `Quantidade de respostas Ruim: ${qtdPessimo}`;
    porcOtimoEl.textContent = `Porcentagem de respostas Excelente: ${porcOtimo.toFixed(2)}%`;
    porcBomEl.textContent = `Porcentagem de respostas Bom: ${porcBom.toFixed(2)}%`;
    numHomensEl.textContent = `Número de Homens: ${numHomens}`;
    numMulheresEl.textContent = `Número de Mulheres: ${numMulheres}`;

    resultadosDiv.classList.remove("hidden");
}

formPesquisa.addEventListener("submit", function(event) {
    event.preventDefault(); 

    idade = parseInt(document.getElementById("idade").value);
    sexo = document.getElementById("sexo").value;
    opiniao = parseInt(document.getElementById("opiniao").value);

    totIdade += idade;
    pessoas++;

    if (pessoas === 1) {
        maisVelha = idade;
        maisNova = idade;
    } else {
        if (idade > maisVelha) maisVelha = idade;
        if (idade < maisNova) maisNova = idade;
    }

    if (opiniao === 1) qtdPessimo++;
    if (opiniao === 4) qtdOtimo++;
    if (opiniao === 3) qtdBom++;

    if (sexo === "M") numHomens++;
    if (sexo === "F") numMulheres++;

    formPesquisa.reset();
});

const btnVerificar = document.getElementById("verificar");
btnVerificar.addEventListener("click", calcularResultados);
