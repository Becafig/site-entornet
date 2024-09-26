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
