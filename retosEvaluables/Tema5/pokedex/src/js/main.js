import apiData from "./pokeApi.js";
import { renderList } from "./components/list.js";
import paginationComponent from "./components/pagination.js";
import { renderProfile } from "./components/pokemonProfile.js"

let searchInput = document.getElementById("searchBox__input");
let searchButton = document.getElementById("searchBox__button");
let initialLimit = 18; // Valor inicial del límite
let initialTotalCount;

document.querySelector("#limitMarker").textContent = initialLimit;
document.querySelector(".btn.dropdown-toggle").textContent = initialLimit;
console.log('initialLimit: ', initialLimit);


//  ======================= LISTA POKEMON  =======================  */


document.addEventListener("DOMContentLoaded", () => {

  //funcionalidad para la búsqueda de pokemon
 searchButton.addEventListener('click',()=>{
  if (!searchInput) {
    alert('Debes introducir el nombre o el id de un pokemon');
  } else {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchInput.value}/`;
    renderProfile(url);
  }

 });

  // Obtener el totalCount inicial
  apiData.getPokemonList("https://pokeapi.co/api/v2/pokemon/?limit=18&offset=0")
  .then(res => {
    initialTotalCount = res.count;
    console.log('initialTotalCount: ', initialTotalCount);
    
    // Renderizar la lista de Pokémon
    renderList("https://pokeapi.co/api/v2/pokemon/?limit=18&offset=0");
    
    // Mostrar 20-50-100 cards
      let limitButtons = document.querySelectorAll(".dropdown-item");
      limitButtons.forEach((button) => {
        button.addEventListener("click", () => {
          let actualoffset = document.querySelector('.pokemonCard')?.getAttribute('id');
          paginationComponent.limitDisplay(button.textContent, actualoffset - 1);
          document.querySelector("#limitMarker").textContent = button.textContent;
        });
      });
      // Llamar a la función de paginación con el totalCount correcto
      paginationComponent.index(initialTotalCount, initialLimit);
    })
    .catch(error => {
      console.error('Error al recuperar totalCount inicial', error);
    });
});






