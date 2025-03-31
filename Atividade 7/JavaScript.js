let jogadorNome;

let jogadorEscolha = 0;

let computadorPontos = 0;
let computadorEscolha;

function mensagem(texto) {
    document.querySelector('.mensagem').innerHTML = texto;
}

function definirNomeJogador(nome) {
    document.querySelector('.jogador-nome').innerHTML = nome;
}

function sortear() {
    return Math.floor(Math.random() * 3) + 1;
}

function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        return 2;
    }
    else if (jogador == 1 && computador == 3) {
        return 1;
    }
    else if (jogador == 2 && computador == 1) {
        return 1;
    }
    else if (jogador == 2 && computador == 2) {
        return 0;
    }
    else if (jogador == 2 && computador == 3) {
        return 2;
    }
    else if (jogador == 3 && computador == 1) {
        return 2;
    }
    else if (jogador == 3 && computador == 2) {
        return 1;
    }
    else if (jogador == 3 && computador == 3) {
        return 0;
    }
}

function selecionar(tipo, escolha) {
    document.querySelector(`.${tipo}-escolha-${escolha}`).classList.add('selecionado');
}

function deselecionar(tipo, escolha) {
    document.querySelector(`.${tipo}-escolha-${escolha}`).classList.remove('selecionado');
}

function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    computadorEscolha = sortear();
    selecionar('computador', computadorEscolha);

    let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0) {
        mensagem('Empate');
    } else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
    } else if (ganhador == 2) {
        mensagem('Ponto para o Computador');
    }

    setTimeout(function () {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ' escolha uma opção acima...');
    }, 1000);
}

document.querySelector('.jogador-escolha-1').onclick = function () { jogar(1); };
document.querySelector('.jogador-escolha-2').onclick = function () { jogar(2); };
document.querySelector('.jogador-escolha-3').onclick = function () { jogar(3); };

jogadorNome = prompt('Qual é o seu nome?');

mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...');
definirNomeJogador(jogadorNome);
