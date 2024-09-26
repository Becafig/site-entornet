document.getElementById('menuButton').addEventListener('click', function(event) {
    var sideMenu = document.getElementById('sideMenu');
    if (sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
    } else {
        sideMenu.classList.add('open');
    }
    event.stopPropagation(); 
});

document.addEventListener('click', function(event) {
    var sideMenu = document.getElementById('sideMenu');
    if (!event.target.closest('#sideMenu') && !event.target.closest('#menuButton') && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
    }
});
