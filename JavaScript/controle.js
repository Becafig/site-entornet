
function atualizarImagensSlider() {
    const imagensSlider = document.querySelectorAll('.slider .list .item img');
    const imagensThumbnail = document.querySelectorAll('.thumbnail .item img');
    const imagensOriginais = ['50M.webp', '100M.webp', '300M.webp', '500M.webp'];
    const imagensMenores = ['50mega.webp', '100mega.webp', '300mega.webp', '500mega.webp'];

    if (window.innerWidth < 800) {
        imagensSlider.forEach((img, index) => {
            img.src = `./image/${imagensMenores[index]}`;
        });
        imagensThumbnail.forEach((img, index) => {
            img.src = `./image/${imagensMenores[index]}`;
        });
    } else {
        imagensSlider.forEach((img, index) => {
            img.src = `./image/${imagensOriginais[index]}`;
        });
        imagensThumbnail.forEach((img, index) => {
            img.src = `./image/${imagensOriginais[index]}`;
        });
    }
}

window.addEventListener('load', atualizarImagensSlider);

window.addEventListener('resize', atualizarImagensSlider);