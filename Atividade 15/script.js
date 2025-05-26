function validar() {
    const form = document.nomeform.elements;
  
    const nome = form["nome"].value.trim();
    const email = form["email"].value.trim();
    const comentario = form["comentario"].value.trim();
  
    if (nome.length < 10) {
      alert("O nome deve conter pelo menos 10 caracteres.");
      return false;
    }
  
    if (comentario.length < 20) {
      alert("O comentário deve conter pelo menos 20 caracteres.");
      return false;
    }
  
 
    let pesquisaSelecionada = false;
    let valorPesquisa = "";
  
    for (let i = 0; i < form["pesquisa"].length; i++) {
      if (form["pesquisa"][i].checked) {
        pesquisaSelecionada = true;
        valorPesquisa = form["pesquisa"][i].value;
        break;
      }
    }
  
    if (!pesquisaSelecionada) {
      alert("Pesquisa obrigatória! Selecione se é sua primeira vez.");
      return false;
    }
  
    if (valorPesquisa === "nao") {
      alert("Que bom que você voltou a visitar esta página!");
    } else {
      alert("Volte sempre à esta página!");
    }
  
    return true;
  }
  
