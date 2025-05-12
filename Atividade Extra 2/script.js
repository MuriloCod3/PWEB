let alunos = [];

function adicionarAluno() {
  const form = document.formAluno;
  const nome = form.nome.value.trim();
  const ra = form.ra.value.trim();
  const nota1 = parseFloat(form.nota1.value);
  const nota2 = parseFloat(form.nota2.value);
  const nota3 = parseFloat(form.nota3.value);


  if (nome.split(" ").length < 2) {
    alert("Digite o nome completo (nome e sobrenome).");
    return false;
  }

  if (!/^\d{5}$/.test(ra)) {
    alert("RA deve conter exatamente 5 dígitos numéricos.");
    return false;
  }

  if (![nota1, nota2, nota3].every(n => n >= 0 && n <= 10)) {
    alert("As notas devem estar entre 0 e 10.");
    return false;
  }


  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  alunos.push({ nome, ra, media: parseFloat(media) });
 
  const div = document.getElementById("resultado");
  div.innerHTML += `<p><strong>${nome}</strong> | RA: ${ra} | Média: ${media}</p>`;


  form.reset();
  form.nome.focus();


  if (alunos.length === 10) {
    const mediaGeral = (
      alunos.reduce((soma, aluno) => soma + aluno.media, 0) / alunos.length
    ).toFixed(2);
    div.innerHTML += `<h3>Média Geral da Turma: ${mediaGeral}</h3>`;
    form.querySelector("button").disabled = true;
  }

  return false; 
}
