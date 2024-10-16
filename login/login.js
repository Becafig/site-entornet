import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login realizado com sucesso:", user);

        document.querySelector('.navegadores').style.display = 'block';
        document.querySelector('.menu-lateral').style.display = 'flex';
        document.getElementById("login").style.display = 'none';
        carregarStatus(); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
      });
});
const editStatusLink = document.getElementById('status');
const editorDiv = document.getElementById('card');

editStatusLink.addEventListener('click', (e) => {
    e.preventDefault();

    if (editorDiv.style.display === 'none' || editorDiv.style.display === '') {
        editorDiv.style.display = 'flex';
    } else {
        editorDiv.style.display = 'none';
    }
});

const salvarBtn = document.getElementById('salvar');
const textdesc = document.getElementById('desc');
const texttitulo = document.getElementById('titulo');
const textprev = document.getElementById('prev');
const textatua = document.getElementById('atua');

salvarBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const mensagemDesc = textdesc.value;
    const mensagemTitulo = texttitulo.value;
    const mensagemPrev = textprev.value;
    const mensagemAtua = textatua.value;

    try {
        await setDoc(doc(db, "status", "descrição"), {
            mensagem: mensagemDesc
        });
        await setDoc(doc(db, "status", "titulo"), {
            mensagem: mensagemTitulo
        });
        await setDoc(doc(db, "status", "previsão"), {
            mensagem: mensagemPrev
        });
        await setDoc(doc(db, "status", "atualização"), {
            mensagem: mensagemAtua
        });
        alert("Mensagens salvas com sucesso!");

    } catch (error) {
        console.error("Erro ao salvar as mensagens: ", error);
        alert("Erro ao salvar as mensagens.");
    }
});

function carregarStatus() {
}
