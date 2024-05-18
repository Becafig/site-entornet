document.getElementById('menuButton').addEventListener('click', function(event) {
    var sideMenu = document.getElementById('sideMenu');
    if (sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
    } else {
        sideMenu.classList.add('open');
    }
    event.stopPropagation(); // Impede que o evento de clique seja propagado para fora do botão
});

// Adiciona um event listener para fechar o menu quando o usuário clicar fora dele
document.addEventListener('click', function(event) {
    var sideMenu = document.getElementById('sideMenu');
    if (!event.target.closest('#sideMenu') && !event.target.closest('#menuButton') && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
    }
});
