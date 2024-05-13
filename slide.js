let proximoBtn = document.querySelector('.proximo')
let voltarBtn = document.querySelector('.voltar')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Função para botão proximo 
proximoBtn.onclick = function() {
    moveSlider('proximo')
}


// Função para botão voltar 
voltarBtn.onclick = function() {
    moveSlider('voltar')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'proximo'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('proximo')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('voltar')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'proximo'){
            slider.classList.remove('proximo')
        } else {
            slider.classList.remove('voltar')
        }
    }, {once: true}) // Remove o evento listener depois de ser acionado uma vez
}