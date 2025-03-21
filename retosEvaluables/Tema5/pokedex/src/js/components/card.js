import apiData from "../pokeApi.js";
import { renderProfile } from "./pokemonProfile.js";



function renderCard(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let card = document.createElement("div");
  // spinner

  card.classList.add("pokemonCard__wrapper", "col-md-2");
  apiData
    .getPokemon(url)
    .then((pokemon) => {
      card.innerHTML += `
<div id="${
  pokemon.id
}" class="pokemonCard col-md-12 d-flex flex-column justify-content-between align-items-center p-4 bg-custom h-100">
  <svg class="bg-svg rounded-5" viewBox="0 0 300 436" class="cell">
    <defs>
      <linearGradient id="bg-gradient" x1="157.02" y1="90.68" x2="157.02" y2="246.27"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="rgba( 255, 255, 255, 0.3 )"></stop>
          <stop offset="1" stop-color="rgba( 255, 255, 255, 0.5 )"></stop>
      </linearGradient>
      <linearGradient id="bg-gradient-hover" x1="157.02" y1="90.68" x2="157.02" y2="246.27"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="rgba(255, 246, 146, 0.7)"></stop>
          <stop offset="1" stop-color="rgba(255, 225, 85, 0.8)"></stop>
      </linearGradient>
    </defs>
    <path
        d="M270.88,433C242,438,196,441,155,441s-93.84-3.61-115.88-8C14,428,11,405,9,368c-.92-17-4-70-4-145S9,77,9,77c1-37,5.23-59,30.12-64S114,5,155,5s91.77,2,115.88,8S300,40,301,77c0,0,4,71,4,146s-1.36,124.73-3,145C299,405,299.77,428,270.88,433Z"
        transform="translate(-5 -5)" class="bg" style="fill: url(&quot;#bg-gradient&quot;);"></path>
    <path
        d="M155,15.31c18.41,0,80.61.55,108.25,7.62,10.49,2.69,17.29,8.7,21.39,18.91,3.59,8.94,5.34,21.33,5.87,41.45,0,.68,3.72,68.76,3.72,139.71,0,64.71-1,116.58-2.79,138.73-.22,2.86-.42,5.62-.62,8.3-2.22,30.4-3.56,48.75-27.5,53-26.06,4.64-68.58,7.64-108.32,7.64-38.49,0-88.09-3.5-108.3-7.64-22.62-4.63-25.37-26.25-27.21-61.29l-.13-2.36c-1-18.54-3.59-67.8-3.59-136.4,0-70.95,3.68-139,3.72-139.74,1-36.47,5.43-55.81,27.22-60.31,24.25-5,72.83-7.64,108.29-7.64m0-1c-38.14,0-85.35,2.87-108.5,7.66s-27.08,25.84-28,61.26c0,0-3.72,68-3.72,139.77s2.87,122.56,3.72,138.81c1.86,35.42,4.65,57.44,28,62.22,20.51,4.2,70.36,7.66,108.5,7.66s81.63-2.87,108.5-7.66,26.15-26.8,28.94-62.22c1.53-19.41,2.79-67,2.79-138.81s-3.72-139.77-3.72-139.77c-.93-35.42-5.58-55.52-28-61.26S193.14,14.31,155,14.31Z"
        transform="translate(-5 -5)" class="stroke" style="fill: rgb(255, 255, 255);"></path>
  </svg>
  <div class="pokemonCard__content-wrapper hidden">
    <h3 id="pokemonName" class="text-center">${
      pokemon.name
    }<span class="pe-1"></span></h3>
    <div id="pokemonCard__image-container" class=" d-flex justify-content-center align-items-center">
      <img id="pokemonCard__image" class=""
        src="${pokemon.picture}"
        alt="">
    </div>
    <div class="d-flex flex-column justify-content-end align-items-center">
      <div id="pokemonCard__type" class="d-inline-flex justify-content-evenly align-items-center gap-1">
      ${badges(pokemon.types)}
      </div>
        <div class="row pokemonCard_button-wrapper p-2">
          <button id="pokemonCard__button" class="btn btn-outline-primary fw-bold py-1 px-3">Ver</button>
        </div>
    </div>
  </div>
    <div class="spinner position-absolute"></div>
</div>

    `;

    triggerTooltips();
      card
        .querySelector("#pokemonCard__button");
              // hover
      card.addEventListener("mouseenter", function () {
        let svgElement = card.querySelector("svg");
        let pathElement = svgElement.querySelector("path.bg");
        pathElement.setAttribute("style", "fill: url(#bg-gradient-hover);");
        svgElement.classList.add("cell");
        card.querySelector("#pokemonName").classList.add("text-grow");
      });

      card.addEventListener("mouseleave", function () {
        let svgElement = card.querySelector("svg");
        let pathElement = svgElement.querySelector("path.bg");
        pathElement.setAttribute("style", "fill: url(#bg-gradient);");
        svgElement.classList.remove("cell");
        card.querySelector("#pokemonName").classList.remove("text-grow");
      });
    })
    .then(() => {
      setTimeout(() => {
        let contentWrapper = card.querySelector(".pokemonCard__content-wrapper");
        return contentWrapper.classList.remove("hidden");
      }, 1000);
    })
    .then(()=>{
      let button = card.querySelector('#pokemonCard__button')
      button.addEventListener('click', ()=>{
        console.log('click');
        renderProfile(url);
      })
    })
    .catch((error) => {
      console.error("Hubo un error en renderCard en card.js:", error);
    });

  return card;
}

// //*  ============================================== Auxiliares  ==============================================  */
// Badges tipo pokemon
function badges(types) {
  return types.map(type => {
    // console.log(type);
    return `
      <div class="badge rounded-pill poke-type--${type.typeId}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="poke-tt--${type.typeId}" data-bs-title="${type.typeName}">
        <a id="pokemonCard__type-icon" href="#" class="d-inline-block link-light">${type.icon}</a>
      </div>
    `;
  }).join('');
}

// Codigo de bootstrap para los tooltips
function triggerTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

let cardComponent = { renderCard, badges, triggerTooltips };
export default cardComponent;