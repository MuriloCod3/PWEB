function encontrarMaior() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    const valorC = parseFloat(document.getElementById('valorC').value);

    const maior = Math.max(valorA, valorB, valorC);
    document.getElementById('saidaMaior').textContent = `Resultado: O maior número é ${maior}`;
}

function ordenarValores() {
    const x = parseFloat(document.getElementById('valorX').value);
    const y = parseFloat(document.getElementById('valorY').value);
    const z = parseFloat(document.getElementById('valorZ').value);

    const lista = [x, y, z];
    lista.sort((a, b) => a - b);
    document.getElementById('saidaOrdem').textContent = `Resultado: Ordem crescente: ${lista.join(', ')}`;
}

function checarPalindromo() {
    const entrada = document.getElementById('entradaTexto').value.toLowerCase().replace(/\s/g, '');
    const invertido = entrada.split('').reverse().join('');

    if (entrada === invertido) {
        document.getElementById('saidaPalindromo').textContent = `Resultado: É um palíndromo!`;
    } else {
        document.getElementById('saidaPalindromo').textContent = `Resultado: Não é um palíndromo.`;
    }
}

function definirTriangulo() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const saida = document.getElementById('saidaTriangulo');

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            saida.textContent = `Resultado: Triângulo Equilátero`;
        } else if (a === b || b === c || a === c) {
            saida.textContent = `Resultado: Triângulo Isósceles`;
        } else {
            saida.textContent = `Resultado: Triângulo Escaleno`;
        }
    } else {
        saida.textContent = `Resultado: Não forma um triângulo válido`;
    }
}
