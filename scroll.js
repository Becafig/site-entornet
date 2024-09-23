let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navpreto").style.backgroundColor = "#000264"; 
  } else {
    document.getElementById("navpreto").style.backgroundColor = "rgba(0, 0, 0, 0.4)"; 
  }
  prevScrollpos = currentScrollPos;
}
