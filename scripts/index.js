import {services} from './services-data.js';

let slideIndex = 0;
showSlides();

function showSlides() {

  let slides = document.getElementsByClassName("img-slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3500); 
  // Replay every 3.5 seconds

}

console.log(services)

// Lising Services //


function listingServices(){

  let html = '';
  services.forEach((service) => {
    html += `<a class="service" data-id = ${service.id}>
    ${service.serviceName}
    </a>`
  });

  document.querySelector('.service-infos')
  .innerHTML = html;

}

listingServices();

function sendQuerrySParms(){
  
  const baseUrl = "services.html";
  let serviceId = '';
  
  
  document.querySelectorAll('.service')
  .forEach((link) => {
    
     link.addEventListener('click', () => {
     const params = new URLSearchParams();

     serviceId = link.dataset.id;
     params.append('serviceId', serviceId);
     window.location.href =  `${baseUrl}?${params.toString()}`;
  })
  })

}

sendQuerrySParms();

  
// Listing Reviews //

/*function listingReviews(){
  let html = '';

  reviews.forEach((review) => {
    html += 
     `<div class = "reviews-img-container">
        <div class= "modal-container-${review.id} hide">
            <img class="reviews-modal-img" src = "${review.image}" data-id = ${review.id}>
        </div>
        <img class="reviews-img" src = "${review.image}" data-id = ${review.id}>
      </div>
     `})
     console.log(html);

     document.querySelector('.reviews-grid')
        .innerHTML = html;
}

listingReviews();

// display Modal //

function displayModal(){
  
  const images = document.querySelectorAll('.reviews-img');

  images.forEach((image) => {
    image.addEventListener('click', () => {

      const imageId = image.dataset.id
      document.querySelector(`.modal-container-${imageId}`)
        .classList.add('modal-container-show');
    })
  })
}

displayModal();*/