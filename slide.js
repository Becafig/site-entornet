document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider .list .item');
    let currentIndex = 0;
    const totalItems = items.length;
    let autoSlideInterval;

    // Função para mostrar o próximo slide
    function showNextSlide() {
        items[currentIndex].style.zIndex = 1;
        items[currentIndex].style.animation = 'none';

        currentIndex = (currentIndex + 1) % totalItems;

        items[currentIndex].style.zIndex = 2;
        items[currentIndex].style.animation = 'showImage .5s linear 1 forwards';
        slider.classList.add('proximo');
        setTimeout(() => slider.classList.remove('proximo'), 500);
    }

    // Função para iniciar o slide automático
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 3000);
    }

    // Função para parar o slide automático
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Adicionar eventos de mouseover e mouseout para parar e iniciar o slide automático
    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    // Iniciar o slide automático ao carregar a página
    startAutoSlide();
});
