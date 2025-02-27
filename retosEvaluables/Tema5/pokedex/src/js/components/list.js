import apiData from "../pokeApi.js";
import cardComponent from "./card.js";


let exportListData;

function renderList(url = "https://pokeapi.co/api/v2/pokemon/") {
  
 apiData
    .getPokemonList(url)
    .then((res) => {
      console.log(res);
      let row = document.createElement("div");
      res.results.forEach((listedPokemon, index) => {
        if (index % 6 === 0 || index === 0) {
          row = document.createElement("div");
          row.classList.add(
            "pokemonGrid-row",
            "row",
            "mt-2",
            "d-flex",
            "justify-content-evnly",
            "align-items-stretch"
          );
          document.getElementById("pokemonGrid").appendChild(row);
        }        
        let card = cardComponent.renderCard(listedPokemon.name);
        row.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Hubo un error con getPokemonList en list.js:", error);
    });
  }
  

export { renderList };
