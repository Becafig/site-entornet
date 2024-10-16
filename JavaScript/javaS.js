




/*         Slider          */




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



/*          modo dark btn            */

const toggle = document.getElementById('mododark');
const elements = document.querySelectorAll('.black');
const headingsAndParagraphs = document.querySelectorAll('h1, h3');

toggle.addEventListener('change', function() {
    elements.forEach(element => {
        if (this.checked) {
            element.style.backgroundColor = '#01080E';
            element.style.color = 'white';
        } else {
            element.style.backgroundColor = '';  
            element.style.color = '';  
        }
    });

    headingsAndParagraphs.forEach(element => {
        if (this.checked) {
            element.style.color = 'white';
        } else {
            element.style.color = '';  
        }
    });
});






/*            scroll         */



let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navazul").style.backgroundColor = "#00035d"; 
  } else {
    document.getElementById("navazul").style.backgroundColor = "rgba(0, 0, 0, 0.4)"; 
  }
  prevScrollpos = currentScrollPos;
}











/*        mobile-navbar       */



class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();






  /*        Planos sub        */



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






/*        email        */



document.getElementById('contatoform').addEventListener('submit', function(e) {
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






  /*        dev nome        */



  const text = "Lucas becafig";
  const typingSpeed = 150;       
  let index = 0;
  const element = document.getElementById("dev");
  let hasAnimated = false;       
  
  
  function typeWriter() {
    if (index < text.length) {
      element.innerHTML = text.substring(0, index + 1); 
      index++;
      setTimeout(typeWriter, typingSpeed);              
    }
  }
  
  
  function startTyping(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        typeWriter();
        hasAnimated = true;  
      }
    });
  }
  
  
  const observer = new IntersectionObserver(startTyping, {
    root: null,    
    threshold: 0.1
  });
  
  observer.observe(element);









/*        chat bot       */



let isChatVisible = false;

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    if (!isChatVisible) {
        chatbot.style.display = 'flex';  // mostra
        isChatVisible = true;
    } else {
        chatbot.style.display = 'none';  // oculta
        isChatVisible = false;
    }
}

document.addEventListener('click', function(event) {
    const chatbot = document.getElementById('chatbot');
    const chatbotIcon = document.getElementById('chatbotIcon');

    if (isChatVisible && !chatbot.contains(event.target) && !chatbotIcon.contains(event.target)) {
        chatbot.style.display = 'none';
        isChatVisible = false;
    }
});

document.getElementById('chatbot').addEventListener('click', function(event) {
    event.stopPropagation();
});

function clearOptions() {
    const buttons = document.querySelectorAll('.optionButton');
    buttons.forEach(button => button.remove());
}

function addMessage(text, isBot = true) {
    const chatArea = document.getElementById('chatArea');
    const newMessage = document.createElement('div');
    newMessage.className = isBot ? 'message botMessage' : 'message userMessage';
    newMessage.innerText = text;
    chatArea.appendChild(newMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function contratarServicos() {
    clearOptions();
    addMessage("Contratar Serviços", false);
    setTimeout(() => {
        addMessage("Escolha seu plano:");
        addOption("50 Mega + Wi-Fi por R$79,90", "contratar50");
        addOption("100 Mega + Wi-Fi por R$89,90", "contratar100");
        addOption("300 Mega + Wi-Fi por R$99,90", "contratar300");
        addOption("500 Mega + Wi-Fi por R$139,90", "contratar500");
    }, 500);
}

function alterarPlano() {
    clearOptions();
    addMessage("Alterar Plano", false);
    setTimeout(() => {
        addMessage("Escolha seu plano:");
        addOption("50 Mega + Wi-Fi por R$79,90", "alterar50");
        addOption("100 Mega + Wi-Fi por R$89,90", "alterar100");
        addOption("300 Mega + Wi-Fi por R$99,90", "alterar300");
        addOption("500 Mega + Wi-Fi por R$139,90", "alterar500");
    }, 500);
}

function falarAtendente() {
    clearOptions();
    addMessage("Falar com Atendente", false);
    setTimeout(() => {
        addMessage("Iremos redirecionar você para nosso WhatsApp.");
        startCountdown();
    }, 500);
}

function addOption(text, action) {
    const chatArea = document.getElementById('chatArea');
    const button = document.createElement('button');
    button.className = 'optionButton';
    button.innerText = text;
    button.onclick = () => handleSelection(action, text);
    chatArea.appendChild(button);
}

function handleSelection(action, text) {
    clearOptions();
    addMessage(text, false);

    if (action.startsWith('contratar')) {
        setTimeout(() => {
            addMessage("Fico feliz que deseja contratar nossos serviços! Para prosseguir com a contratação, tenha em mãos seu RG e CPF.");
            setTimeout(() => {
                addMessage("Iremos redirecionar você para nosso WhatsApp.");
                startCountdown();
            }, 1000);
        }, 500);
    } else if (action.startsWith('alterar')) {
        setTimeout(() => {
            addMessage("Deseja dar um UP no seu plano? Vamos nessa!");
            setTimeout(() => {
                addMessage("Iremos redirecionar você para nosso WhatsApp.");
                startCountdown();
            }, 1000);
        }, 500);
    }
}

function startCountdown() {
    let countdown = 10;
    const chatArea = document.getElementById('chatArea');
    const countdownMessage = document.createElement('div');
    countdownMessage.className = 'message botMessage';
    countdownMessage.innerText = `Redirecionando em ${countdown} segundos...`;
    chatArea.appendChild(countdownMessage);
    chatArea.scrollTop = chatArea.scrollHeight;

    const interval = setInterval(() => {
        countdown--;
        countdownMessage.innerText = `Redirecionando em ${countdown} segundos...`;

        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = 'https://wa.me/2227781113';

            const manualButton = document.createElement('button');
            manualButton.innerText = 'Redirecionar Manualmente';
            manualButton.className = 'manualRedirectButton';
            manualButton.onclick = () => {
                window.location.href = 'https://wa.me/2227781113';
            };
            chatArea.appendChild(manualButton);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }, 1000);
}








