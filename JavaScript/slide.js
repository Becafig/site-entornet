document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const list = slider.querySelector('.list');
    const items = document.querySelectorAll('.slider .list .item');
    const thumbnails = document.querySelectorAll('.thumbnail .item img');
    let currentIndex = 0;
    const totalItems = items.length;
    let autoSlideInterval;


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

    
    function startAutoSlide() {
        stopAutoSlide(); 
        autoSlideInterval = setInterval(showNextSlide, 3000);
    }

    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

  
    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);


    slider.addEventListener('touchstart', stopAutoSlide);
    slider.addEventListener('touchend', startAutoSlide);


    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('mouseover', stopAutoSlide);
        thumbnail.addEventListener('mouseout', startAutoSlide);
        thumbnail.addEventListener('touchstart', stopAutoSlide);
        thumbnail.addEventListener('touchend', startAutoSlide);
    });


    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });


    items.forEach((item) => {
        item.addEventListener('mouseover', stopAutoSlide);
        item.addEventListener('mouseout', startAutoSlide);
        item.addEventListener('touchstart', stopAutoSlide);
        item.addEventListener('touchend', startAutoSlide);
    });


    startAutoSlide();
});
