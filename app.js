const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlides);

function initializeSlides(){
    if(slides.length > 0){
        slides[slideindex].classList.add("displaySlider");
        intervalID = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;

    }
        slides.forEach(slide => {
            slide.classList.remove("displaySlider");
        });
    slides[slideindex].classList.add("displaySlider");
}

function nextSlide(){
            slideindex++;
            showSlide(slideindex);
        }
   function prevSlide(){
    clearInterval(intervalID);
    slideindex--;
    showSlide(slideindex);
   }  


   /*****Scroll to product animation*/
   SmoothScroll();
   let scrollProd = document.getElementById("long");
   let displayView = document.getElementById("products-after-scroll");
   function SmoothScroll(){
        scrollProd.onclick = function(){
             displayView.style.display = "flex";
        }
   }
 