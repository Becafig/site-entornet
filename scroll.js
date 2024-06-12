let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.backgroundColor = "#000137"; // cor da barra fixa
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // cor/transparencia da barra fixa ao ser rolado a pagina para baixo
  }
  prevScrollpos = currentScrollPos;
}
