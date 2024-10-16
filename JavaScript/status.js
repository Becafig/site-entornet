import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCp-05JuwdKue0Cg3zyJlquWRDqQFVxYdQ",
  authDomain: "att-entornet.firebaseapp.com",
  projectId: "att-entornet",
  storageBucket: "att-entornet.appspot.com",
  messagingSenderId: "210775731786",
  appId: "1:210775731786:web:5283a68d552a82feeb40b3",
  measurementId: "G-N4Q98J93D7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

async function carregarStatus() {
  try {
    const descricaoRef = doc(db, "status", "descrição");
    const descricaoSnap = await getDoc(descricaoRef);
    if (descricaoSnap.exists()) {
      const mensagemDescricao = descricaoSnap.data().mensagem;
      document.querySelector('.status-text').value = mensagemDescricao;
    } else {
      console.log("Documento 'descrição' não encontrado!");
    }
    const tituloRef = doc(db, "status", "titulo");
    const tituloSnap = await getDoc(tituloRef);
    if (tituloSnap.exists()) {
      const mensagemTitulo = tituloSnap.data().mensagem;
      document.querySelector('.titulo').textContent = mensagemTitulo;
    } else {
      console.log("Documento 'titulo' não encontrado!");
    }
    const previsaoRef = doc(db, "status", "previsão");
    const previsaoSnap = await getDoc(previsaoRef);
    if (previsaoSnap.exists()) {
      const mensagemPrevisao = previsaoSnap.data().mensagem;
      document.querySelector('.previsão').textContent = `Previsão: ${mensagemPrevisao}`;
    } else {
      console.log("Documento 'previsão' não encontrado!");
    }
    const atualizacaoRef = doc(db, "status", "atualização");
    const atualizacaoSnap = await getDoc(atualizacaoRef);
    if (atualizacaoSnap.exists()) {
      const mensagemAtualizacao = atualizacaoSnap.data().mensagem;
      document.querySelector('.atualização').textContent = `Att: ${mensagemAtualizacao}`;
    } else {
      console.log("Documento 'atualização' não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao carregar o status:", error);
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  carregarStatus();
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









 /*        Modo Dark        */



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
