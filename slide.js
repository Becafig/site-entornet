document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const list = slider.querySelector('.list');
    const items = document.querySelectorAll('.slider .list .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item img');
    let currentIndex = 0;
    const totalItems = items.length;
    let autoSlideInterval;

    // Função para mostrar o próximo slide
    function showNextSlide() {
        const lastItem = items[totalItems - 1];
        list.insertBefore(lastItem, items[0]);

        items.forEach((item, index) => {
            item.style.zIndex = 1;
            item.style.animation = 'none';
            if (index === currentIndex) {
                item.style.zIndex = 2;
                item.style.animation = 'showImage .5s linear 1 forwards';
            }
        });

        currentIndex = (currentIndex + 1) % totalItems;
    }

    // Função para mostrar o slide selecionado
    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.zIndex = 1;
            item.style.animation = 'none';
            if (i === index) {
                item.style.zIndex = 2;
                item.style.animation = 'showImage .5s linear 1 forwards';
            }
        });

        currentIndex = index;
    }

    // Função para iniciar o slide automático
    function startAutoSlide() {
        stopAutoSlide(); // Garante que qualquer intervalo anterior seja limpo antes de iniciar um novo
        autoSlideInterval = setInterval(showNextSlide, 3000);
    }

    // Função para parar o slide automático
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Adicionar eventos de mouseover e mouseout para parar e iniciar o slide automático
    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    // Adicionar eventos de touchstart e touchend para dispositivos móveis
    slider.addEventListener('touchstart', stopAutoSlide);
    slider.addEventListener('touchend', startAutoSlide);

    // Adicionar eventos de mouseover e mouseout para as miniaturas
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('mouseover', stopAutoSlide);
        thumbnail.addEventListener('mouseout', startAutoSlide);
        thumbnail.addEventListener('touchstart', stopAutoSlide);
        thumbnail.addEventListener('touchend', startAutoSlide);
    });

    // Adicionar evento de clique nas miniaturas
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    // Adicionar eventos de mouseover e mouseout para os itens
    items.forEach((item) => {
        item.addEventListener('mouseover', stopAutoSlide);
        item.addEventListener('mouseout', startAutoSlide);
        item.addEventListener('touchstart', stopAutoSlide);
        item.addEventListener('touchend', startAutoSlide);
    });

    // Iniciar o slide automático ao carregar a página
    startAutoSlide();
});
