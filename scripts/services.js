import {services} from './services-data.js';

function getParams(){
  let html = '';
  const queryString = window.location.search; // get query string wich begins from ?
  const urlParms = new URLSearchParams(queryString); // pass retrieved queryString to URLSearchParams constructor
  const id = urlParms.get('serviceId'); // pass value to id var

  services.forEach((service) => {
    if (service.id === id) {
      html = `
      <img class = "image" src = "${service.image}">
      <div class = "infos">
        <div class = "title">${service.serviceName}</div>
        <div class = "description">${service.infos}</div>
      </div>
      ` 
    }
  })

  document.querySelector('.services-container')
     .innerHTML = html;
  
}
getParams();