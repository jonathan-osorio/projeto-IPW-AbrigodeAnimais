const menu = document.getElementById('menu');
const checkbox = document.getElementById('checkbox')


function dropdown(){
    if(checkbox.checked){
        menu.style.height = "auto"
    }else{
        menu.style.height = "16px"
    }
}

const imgsUrls = [
    "imagens/pexels-mia-x-12195429.jpg",
    "imagens/cat.jpg",
    "imagens/pitbulls.jpg",
    "imagens/pexels-mia-x-12195429.jpg",
    "imagens/cat.jpg",
    "imagens/pitbulls.jpg",
    "imagens/pexels-mia-x-12195429.jpg",
    "imagens/cat.jpg",
    "imagens/pitbulls.jpg"
]

let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

function showSlides(index, slideshow) {
  const slides = document.getElementsByClassName(slideshow);
  if (index > slides.length) { index = 1; }
  if (index < 1) { index = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function plusSlides(n, slideshow) {
  if (slideshow === 'slideshow1') {
    showSlides(slideIndex1 += n, 'slideshow1');
    if (slideIndex1 > document.getElementsByClassName('slideshow1').length) {
      slideIndex1 = 1; // Reinicia o índice quando completa uma volta
    }
  } else if (slideshow === 'slideshow2') {
    showSlides(slideIndex2 += n, 'slideshow2');
    if (slideIndex2 > document.getElementsByClassName('slideshow2').length) {
      slideIndex2 = 1; // Reinicia o índice quando completa uma volta
    }
  } else if (slideshow === 'slideshow3') {
    showSlides(slideIndex3 += n, 'slideshow3');
    if (slideIndex3 > document.getElementsByClassName('slideshow3').length) {
      slideIndex3 = 1; // Reinicia o índice quando completa uma volta
    }
  }
}

// Inicializa os slideshows
showSlides(slideIndex1, 'slideshow1');
showSlides(slideIndex2, 'slideshow2');
showSlides(slideIndex3, 'slideshow3')