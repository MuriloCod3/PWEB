// Construtor para Retângulo
function FiguraRetangular(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

// Função para calcular área do retângulo
function gerarArea() {
    const base = parseFloat(document.getElementById('valorBase').value);
    const altura = parseFloat(document.getElementById('valorAltura').value);

    const figura = new FiguraRetangular(base, altura);
    const area = figura.calcularArea();

    document.getElementById('saidaRetangulo').innerText =
        "Área calculada: " + area + " unidades².";
}

// Classe base para Conta
class ContaBancaria {
    constructor(titular, banco, numero, saldo) {
        this.titular = titular;
        this.banco = banco;
        this.numero = numero;
        this.saldo = saldo;
    }

    mostrarDados() {
        return `
            Titular: ${this.titular}<br>
            Banco: ${this.banco}<br>
            Conta nº: ${this.numero}<br>
            Saldo disponível: R$ ${this.saldo.toFixed(2)}
        `;
    }
}

// Classe Conta Corrente
class ContaCorrente extends ContaBancaria {
    constructor(titular, banco, numero, saldo) {
        super(titular, banco, numero, saldo);
        this.tipo = "Corrente";
    }
}

// Classe Conta Poupança
class ContaPoupanca extends ContaBancaria {
    constructor(titular, banco, numero, saldo, juros, vencimento) {
        super(titular, banco, numero, saldo);
        this.tipo = "Poupança";
        this.juros = juros;
        this.vencimento = vencimento;
    }

    mostrarDados() {
        let dados = super.mostrarDados();
        dados += `<br>Taxa de Juros: ${this.juros}%<br>Vencimento: ${this.vencimento}`;
        return dados;
    }
}

// Criação da Conta Corrente
function montarContaCorrente() {
    const nome = document.getElementById('titularCorrente').value;
    const banco = document.getElementById('instituicaoCorrente').value;
    const conta = document.getElementById('contaCorrenteNum').value;
    const saldo = parseFloat(document.getElementById('saldoCorrenteValor').value);

    const novaCorrente = new ContaCorrente(nome, banco, conta, saldo);
    document.getElementById('exibirCorrente').innerHTML = novaCorrente.mostrarDados();
}

// Criação da Conta Poupança
function montarContaPoupanca() {
    const nome = document.getElementById('titularPoupanca').value;
    const banco = document.getElementById('instituicaoPoupanca').value;
    const conta = document.getElementById('contaPoupancaNum').value;
    const saldo = parseFloat(document.getElementById('saldoPoupancaValor').value);
    const juros = parseFloat(document.getElementById('rendimentoPoupanca').value);
    const vencimento = document.getElementById('validadePoupanca').value;

    const novaPoupanca = new ContaPoupanca(nome, banco, conta, saldo, juros, vencimento);
    document.getElementById('exibirPoupanca').innerHTML = novaPoupanca.mostrarDados();
}
