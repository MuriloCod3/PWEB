let colaborador1 = {
    id: 30482321,
    nomeCompleto: "Carlos Henrique",
    cargo: "Analista de Sistemas"
  };
  
  let exibicao = `
    <h2>Objeto criado pela Primeira Forma (Notação Literal):</h2>
    <pre>${JSON.stringify(colaborador1, null, 2)}</pre>
  `;
  
  function Colaborador(id, nomeCompleto, cargo) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.cargo = cargo;
  }
  
  let colaborador2 = new Colaborador(67584, "Amanda Souza", "Designer Freelancer");
  
  exibicao += `
    <h2>Objeto criado pela Segunda Forma (Função Construtora):</h2>
    <pre>${JSON.stringify(colaborador2, null, 2)}</pre>
  `;
  
  let colaborador3 = Object.create(Object.prototype);
  colaborador3.id = 30482380;
  colaborador3.nomeCompleto = "Lucas Nascimento";
  colaborador3.cargo = "Consultor de TI";
  
  exibicao += `
    <h2>Objeto criado pela Terceira Forma (Object.create()):</h2>
    <pre>${JSON.stringify(colaborador3, null, 2)}</pre>
  `;
  
  document.getElementById('resultado').innerHTML = exibicao;
  
