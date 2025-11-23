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

// Listing Services //


function listingServices(){

  let html = '';
  services.forEach((service) => {
    html += `<a class="service" href="services.html?serviceId=${service.id}" data-id = ${service.id}>
    ${service.serviceName}
    </a>`
  });

  document.querySelector('.service-infos')
  .innerHTML = html;

}

listingServices();

/*
Generating Querry Parms

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
*/