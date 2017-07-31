/**
 * Created by simplon on 14/07/17.
 */
const btnSuivant = document.getElementById('suivant');
//const btnPrecedent = document.getElementById('precedent');
const carousel = document.getElementById('carousel');
const img1 = document.getElementById('cimg1');


//carousel
let position = 0;
let newMargin = 0;

btnSuivant.onclick = () => {
  if(position >= 2) {
      position = -1;
  }

  position++;
  newMargin = position * -83;

  carousel.style.marginLeft = newMargin + 'vw';
};
//endcarousel


// carrousel hover
img1.style.opacity = 0.5;

btnSuivant.onmouseover = () =>{
  img1.style.opacity = 1;
};
//endhover


// target on scroll
function onScroll() {
    let distance = window.pageYOffset;
    let trigger = 100;

    if (distance > trigger) {
      console.log(distance);
        document.querySelector("#hidden").style.transform = "translate3d(0, 0, 0)";

    }else{
        document.querySelector("#hidden").style.transform = "translate3d(0, -50px, 0)";
    }
}
document.addEventListener("scroll", onScroll, aboutScroll);

function aboutScroll() {
    let distance = window.pageYOffset;
    let trigger = 100;
    if (distance > trigger){
        document.querySelector("#hone").style.opacity = 1;
    }else {
        document.querySelector("#hone").style.opacity = 0;
    }
}

document.addEventListener("scroll", aboutScroll);


function projectScroll() {
    let distance = window.pageYOffset;
    let trigger = 600;
    if (distance > trigger){
        document.querySelector("#container").style.transform = "translate3d(0, 0, 0)";
    }
}

document.addEventListener("scroll", projectScroll);
