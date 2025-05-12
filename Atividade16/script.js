function abrirCurso() {
    const select = document.getElementById("cursos");
    const valor = select.value;
  
    if (valor === "") return;
  
    const nomesCursos = {
      ads: "Análise e Desenvolvimento de Sistemas",
      logistica: "Logística",
      gestao: "Gestão Empresarial",
      mecatronica: "Mecatrônica Industrial",
      fabricacao: "Fabricação Mecânica"
    };
  
    const confirmar = confirm(`Deseja abrir informações sobre o curso "${nomesCursos[valor]}"?`);
  
    if (confirmar) {
      const conteudo = `
        <html>
          <head><title>${nomesCursos[valor]}</title></head>
          <body style="font-family: Arial; padding: 20px;">
            <h2>${nomesCursos[valor]}</h2>
            <p>Este curso oferece uma formação sólida na área de ${nomesCursos[valor].split(" ")[0]} com foco em aplicações práticas e mercado de trabalho.</p>
          </body>
        </html>
      `;
  
      const novaJanela = window.open("", "curso", "width=600,height=300");
      novaJanela.document.write(conteudo);
      novaJanela.document.close();
    } else {
      select.value = ""; 
    }
  }
