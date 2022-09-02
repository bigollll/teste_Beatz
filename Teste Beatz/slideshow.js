let i = 0;
let timeout;
var images = [];
images[0] = "url('assets/image/fotoSlide_1.jpg')";
images[1] = "url('assets/image/fotoSlide_2.jpg')";
images[2] = "url('assets/image/fotoSlide_3.jpg')";
images[3] = "url('assets/image/fotoSlide_4.jpg')";
images[4] = "url('assets/image/fotoSlide_5.jpg')";

const currentSlide = (n) => {
  i = n;
  clearTimeout(timeout);
  showSlides(true);
};

const createDots = () => {
  images?.map((item, index) => {
    var newDot = document.createElement("div");
    var sliderDiv = document.getElementById("sliders-pointers");

    newDot.className = "pointer";
    newDot.onclick = () => currentSlide(index);
    sliderDiv.appendChild(newDot);
  });
};

const showSlides = (isClicked = false) => {
  let slides = document.getElementById("banner");
  let dots = document.getElementsByClassName("pointer");
  let delay = 5000;

  slides.style.backgroundImage = images[i];
  slides.style.transition = "all 1s";

  for (e = 0; e < dots?.length; e++) {
    dots[e].className = dots[e]?.className?.replace(" active", "");
  }
  dots[i].className += " active";

  if (i < images?.length - 1) {
    i++;
  } else {
    i = 0;
  }

  timeout = setTimeout(showSlides, delay);
};

createDots();
showSlides();
