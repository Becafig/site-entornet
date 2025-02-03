document.addEventListener("DOMContentLoaded", function () {
    const btnFibra = document.getElementById("op-bt");
    const btnMesh = document.getElementById("op-bt2");
    const btnGamer = document.getElementById("op-bt3");
    const cardsimples = document.querySelectorAll(".cardsimples");
    const cardmesh = document.querySelectorAll(".cardmesh");
    const cardgamer = document.querySelectorAll(".cardgamer");
    
    function setActiveButton(activeButton) {
        [btnFibra, btnMesh, btnGamer].forEach(button => {
            if (button === activeButton) {
                button.style.backgroundColor = "white";
                button.style.color = "black";
            } else {
                button.style.backgroundColor = "";
                button.style.color = "";
            }
        });
    }

    function showCards(cards) {
        document.querySelectorAll(".cardsimples, .cardmesh, .cardgamer").forEach(card => {
            card.style.display = "none";
        });
        cards.forEach(card => {
            card.style.display = "flex";
        });
    }

    btnFibra.addEventListener("click", function (event) {
        event.preventDefault();
        showCards(cardsimples);
        setActiveButton(btnFibra);
    });

    btnMesh.addEventListener("click", function (event) {
        event.preventDefault();
        showCards(cardmesh);
        setActiveButton(btnMesh);
    });

    btnGamer.addEventListener("click", function (event) {
        event.preventDefault();
        showCards(cardgamer);
        setActiveButton(btnGamer);
    });
});
