import apiData from "../pokeApi.js";

//?  ======================= Datos =======================  ?/

let radarChart;

//?  ======================= funciones =======================  ?/

function renderProfile(url) {
  console.log("accediendo a la ficha del pokemon");
  let myModal = new bootstrap.Modal(document.getElementById("profileModal"));
  let closeBtn = document.querySelector("#closeModal");

  apiData.getPokemon(url).then((pokemon) => {
    let titleElement = document.querySelectorAll(".modal-title");
    let pictureElement = document.getElementById("modalPicture");
    let pictureContainer = document.getElementById("Modalpicture__container");
    let typeElement = document.getElementById("modalType");
    let abilitiesElement = document.getElementById("modalAbilities");
    let statsElement = document.getElementById("modalStats__container");
    let pokemonColor = pokemon.species.color.id;

    clearModal();

    titleElement.forEach((element) => (element.textContent += pokemon.name));
    pictureContainer.classList.remove("poke-color--" + pokemonColor);
    pictureContainer.classList.add("poke-color--" + pokemonColor);
    pictureElement.src = pokemon.picture;
    let badges = "";
    pokemon.types.forEach((type) => {
      badges += `
      <div class="badge my-1 rounded-pill poke-type--${type.typeId}" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="poke-tt--${type.typeId}" data-bs-title="${type.typeName}">
        <span class="fw-normal">${type.icon} | ${type.typeName}</span>
      </div>
    `;
    });
    typeElement.innerHTML = badges;

    pokemon.abilities.forEach((ability) => {
      const abilityElement = document.createElement("div");
      abilityElement.innerHTML += `
            <dl class="fw-bold bg-info-subtle text-info-emphasis px-2 rounded-5"><i class="fa-solid fa-hashtag fa-2xs"></i> ${ability.abilityName}</dl>
            <dt class="px-3 fw-normal">${ability.description}</dt>
            <br>
            `;
      abilitiesElement.appendChild(abilityElement);
    });
    statsChart(pokemon.stats);
    evolutionChain(pokemon.species.evolutionChain);
    myModal.show();
  })
  .catch(error =>{
    console.log('Hubo un error con renderprofile: ',error);
    alert('Revisa el nombre que has introducido');
  })

  document
    .getElementById("profileModal")
    .addEventListener("hide.bs.modal", clearModal);

  closeBtn.addEventListener("click", () => {
    myModal.hide();
  });
}

// //*  ============================================== Auxiliares  ==============================================  */

// ?------------------------------- Crear la gráfica

async function statsChart(stats) {
  // const data = stats.slice(0, 6);
  const data = stats;

  if (radarChart) {
    radarChart.destroy();
  }

  radarChart = new Chart(document.getElementById("modalStats"), {
    type: "radar",
    options: {
      animations: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          ticks: {
            display: false,
          },
          precision: 0,
          stepSize: 10,
          min: 0,
          max: 200,
        },
      },
    },
    data: {
      labels: data.map((row) => row.name),
      datasets: [
        {
          label: "stats",
          data: data.map((row) => row.count),
          backgroundColor: "rgba(255, 204, 1, 0.7)",
          borderColor: "rgba(61, 139, 255, 1)",
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        },
      ],
    },
  });
}

// ?------------------------------- Evolution Chain

function evolutionChain(pokemonChain) {
  let column = 12 / pokemonChain.length;
  let chainElement = document.getElementById("modalChain");
  let actualPokemon = document.getElementById('modaltitle');

  let evolutionPromises = pokemonChain.map((evolution) => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + evolution.name;
    return apiData.getPokemon(url);
  });
  Promise.all(evolutionPromises)
  .then((evolutions) => {
    let evolButtons = "";
    evolutions.forEach((currentEvolution, index) => {
      evolButtons += `
        <div id="${currentEvolution.id}" class="evolution col-md-${column} d-flex flex-column justify-content-center align-items-center"> 
          <p class="chainTitle fw-bold w-100 text-center">${currentEvolution.name}</p>
          <div class="chainPicture_container circle --small p-0">
              <img id="chainPicture" src="${currentEvolution.picture}" alt="">
          </div>
        </div>
      `;
      if (index < evolutions.length - 1) {
        evolButtons += `<i class="fa-solid fa-circle-chevron-right fa-xs chain__icon" style="color:var(--pokedex-${currentEvolution.species.color.id})"></i>`;
      }
    });
    chainElement.innerHTML = evolButtons;
  })
    .catch((error) => {
      console.error(
        "Hubo un error al rescatar los datos de la evolucion:",
        error
      );
    });
}

// ?------------------------------- Limpiar el modal
function clearModal() {
  const titleElement = document.getElementById("modalTitle");
  const pictureElement = document.getElementById("modalPicture");
  const pictureContainer = document.getElementById("Modalpicture__container");
  const abilitiesElement = document.getElementById("modalAbilities");

  titleElement.textContent = "";
  pictureContainer.className = pictureContainer.className
    .split(" ")
    .filter((className) => !className.startsWith("poke-color--"))
    .join(" ");
  pictureElement.src = "";
  abilitiesElement.innerHTML = "";

  if (radarChart) {
    radarChart.destroy();
    radarChart = null;
    console.log("destruyendo gráfica");
  }
}

export { renderProfile };
