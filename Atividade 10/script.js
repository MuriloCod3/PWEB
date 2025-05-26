function calcularIMC(peso, altura) {
      return peso / (altura * altura);
  }

function exibirResultado(event) {
      event.preventDefault(); 
  
      let peso = parseFloat(document.getElementById('peso').value);
      let altura = parseFloat(document.getElementById('altura').value);
  
      if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
          alert("Valor Inválido!!");
          return;
      }
  
      let imc = calcularIMC(peso, altura);
      let { classificacao, grau } = obterClassificacao(imc);
  
      document.getElementById('imc').innerText = `IMC: ${imc.toFixed(2)}`;
      document.getElementById('classificacao').innerText = `Classificação: ${classificacao}`;
      document.getElementById('grau').innerText = `Grau de obesidade: ${grau}`;
 }

  function obterClassificacao(imc) {
      let classificacao = '';
      let grau = '';
  
      if (imc < 18.5) {
          classificacao = 'Abaixo do peso';
          grau = 'Não se aplica';
      } else if (imc >= 18.5 && imc < 24.9) {
          classificacao = 'Peso normal';
          grau = 'Não se aplica';
      } else if (imc >= 25 && imc < 29.9) {
          classificacao = 'Sobrepeso';
          grau = 'Não se aplica';
      } else if (imc >= 30 && imc < 34.9) {
          classificacao = 'Obesidade grau 1';
          grau = 'Grau 1';
      } else if (imc >= 35 && imc < 39.9) {
          classificacao = 'Obesidade grau 2';
          grau = 'Grau 2';
      } else {
          classificacao = 'Obesidade grau 3';
          grau = 'Grau 3';
      }
      return { classificacao, grau };
  }

  document.getElementById('imcForm').addEventListener('submit', exibirResultado);
