document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const mensagem = document.getElementById('mensagem').value;

    const emailBody = `Nome: ${nome} ${sobrenome}%0D%0ACPF: ${cpf}%0D%0AEmail: ${email}%0D%0ATelefone: ${telefone}%0D%0ACidade: ${cidade}%0D%0AMensagem: ${mensagem}`;
    
    const mailtoLink = `mailto:atendimento@entornet.com.br?subject=Contato%20via%20Formulário&body=${emailBody}`;
    
    if (window.innerWidth > 800) {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=atendimento@entornet.com.br&su=Contato%20via%20Formulário&body=' + emailBody, '_blank');
    } else {
      window.location.href = mailtoLink;
    }
  });