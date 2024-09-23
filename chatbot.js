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
        setTimeout(() => {
            window.open('https://wa.me/5551999999999', '_blank');
        }, 10000);
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

           
            const manualButton = document.createElement('button');
            manualButton.innerText = 'Redirecionar Manualmente';
            manualButton.className = 'manualRedirectButton';
            manualButton.onclick = () => {
                window.open('https://wa.me/5551999999999', '_blank');
            };
            chatArea.appendChild(manualButton);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }, 1000);
}
