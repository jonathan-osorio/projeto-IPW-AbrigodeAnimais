//variaveis para o menu e o checkboc (icone)
const menu = document.getElementById('menu');
const checkbox = document.getElementById('checkbox')

//função para alteraão no estado da checkbox
function dropdown(){
    if(checkbox.checked){
        menu.style.height = "auto"
    }else{
        menu.style.height = "16px"
    }
}


let slideIndex = 1;
showSlides(slideIndex)

//controles next e previous
//avança ou retrocede com base no valor do argumento
function plusSlides(n) {
  showSlides(slideIndex += n);
}


//definição do indice
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//exibe os slides com o indice n atribuido

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  // Se o índice for maior que o número total de slides, volta para o primeiro slide
  if (n > slides.length){
    slideIndex = 1}
  // Se o índice for menor que 1, vai para o último slide
  if (n<1){
    slideIndex = slides.length
  }
   // Oculta todos os slides
  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  // Remove a classe "active" de todos os indicadores (dots)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  
  }
  // Exibe o slide atual e marca como ativo o dot correspondente
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"
}

//Modal Images

//abrir modal
function openModal(imageSrc, caption) {
  var modal = document.getElementById('myModal');
  var modalImage = document.getElementById('modalImage');

  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalImage.alt = caption;
}

// Fechar modal
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

