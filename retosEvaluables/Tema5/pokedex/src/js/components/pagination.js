import apiData from "../pokeApi.js";
import { renderList } from "./list.js";

// function limitDisplay(limit, offset) {
//     let url =` https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}/`;

//     apiData.getPokemonList(url)
//     .then(res => {
//         document.querySelector('#pokemonGrid').innerHTML = '';
//         renderList(url);
//     })
//     .catch(error =>{
//         console.log("Hubo un error con limitDisplay() en pagination.js:", error)
//     })
// }

// function pagination(url){
//     apiData.getPokemonList(url)
//     .then(res => {
//         document.querySelector('#pokemonGrid').innerHTML = '';
//         renderList(url);
//     })
//     .catch(error =>{
//         console.log("Hubo un error con pagination() en pagination.js:", error)
//     })
// }

function limitDisplay(limit, offset) {
  let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  apiData
    .getPokemonList(url)
    .then((res) => {
      document.querySelector("#pokemonGrid").innerHTML = "";
      renderList(url);
      updatePageCount(res.count, limit);
      updatePagination(res.count, limit, offset);
    })
    .catch((error) => {
      console.log("Hubo un error con limitDisplay() en pagination.js:", error);
    });
}

function pagination(url) {
  apiData
    .getPokemonList(url)
    .then((res) => {
      document.querySelector("#pokemonGrid").innerHTML = "";
      renderList(url);
      let params = new URLSearchParams(url.split("?")[1]);
      let limit = parseInt(params.get("limit"));
      let offset = parseInt(params.get("offset"));
      updatePageCount(res.count, limit);
      updatePagination(res.count, limit, offset);
    })
    .catch((error) => {
      console.log("Hubo un error con pagination() en pagination.js:", error);
    });
}

function updatePageCount(totalCount, limit) {
  limit = parseInt(document.querySelector("#limitMarker").textContent);
  let pageCount = Math.ceil(totalCount / limit);
  console.log("pageCount: ", pageCount);
}

function updatePagination(totalCount, limit, offset) {
  let pageCount = Math.ceil(totalCount / limit);
  let currentPage = Math.floor(offset / limit) + 1;

  let paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";
    console.log("currentPage: ", currentPage);
  // boton "previosus"
  let prevButton = document.createElement("li");
  prevButton.classList.add("page-item");
  if (currentPage === 1) {
    prevButton.classList.add("disabled");
  }
  prevButton.innerHTML = `<a class="page-link" href="#pokemonGrid"" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      pagination(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
          (currentPage - 2) * limit
        }`
      );
    }
  });
  paginationContainer.appendChild(prevButton);

  // Botones de paginas (10 maximo)
  if (pageCount <= 10) {
    for (let i = 1; i <= pageCount; i++) {
      let pageItem = document.createElement("li");
      pageItem.classList.add("page-item");
      if (i === currentPage) {
        pageItem.classList.add("active");
      }
      pageItem.innerHTML = `<a class="page-link" href="#pokemonGrid"">${i}</a>`;
      pageItem.addEventListener("click", () => {
        pagination(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${(i - 1) * limit}`);
      });
      paginationContainer.appendChild(pageItem);
    }
  } else {
    let startPage = Math.max(2, currentPage - 3);
    let endPage = Math.min(pageCount - 1, currentPage + 3);

    // pagina 1 siempre visible
    let firstPageItem = document.createElement("li");
    firstPageItem.classList.add("page-item");
    if (1 === currentPage) {
      firstPageItem.classList.add("active");
    }
    firstPageItem.innerHTML = `<a class="page-link" href="#pokemonGrid"">1</a>`;
    firstPageItem.addEventListener("click", () => {
      pagination(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`);
    });
    paginationContainer.appendChild(firstPageItem);

    // Elipsis antes de startPage
    if (startPage > 2) {
      let ellipsisItem = document.createElement("li");
      ellipsisItem.classList.add("page-item", "disabled");
      ellipsisItem.innerHTML = `<a class="page-link" href="#pokemonGrid"">...</a>`;
      paginationContainer.appendChild(ellipsisItem);
    }

    // Páginas intermedias
    for (let i = startPage; i <= endPage; i++) {
      let pageItem = document.createElement("li");
      pageItem.classList.add("page-item");
      if (i === currentPage) {
        pageItem.classList.add("active");
      }
      pageItem.innerHTML = `<a class="page-link" href="#pokemonGrid"">${i}</a>`;
      pageItem.addEventListener("click", () => {
        pagination(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${(i - 1) * limit}`
        );
      });
      paginationContainer.appendChild(pageItem);
    }

    // Elipsis después de endPage
    if (endPage < pageCount - 1) {
      let ellipsisItem = document.createElement("li");
      ellipsisItem.classList.add("page-item", "disabled");
      ellipsisItem.innerHTML = `<a class="page-link" href="#">...</a>`;
      paginationContainer.appendChild(ellipsisItem);
    }

    // ultima pagina siempre visible
    let lastPageItem = document.createElement("li");
    lastPageItem.classList.add("page-item");
    if (pageCount === currentPage) {
      lastPageItem.classList.add("active");
    }
    lastPageItem.innerHTML = `<a class="page-link" href="#pokemonGrid"">${pageCount}</a>`;
    lastPageItem.addEventListener("click", () => {
      pagination(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${(pageCount - 1) * limit}`
      );
    });
    paginationContainer.appendChild(lastPageItem);
  }

  // boton "next"
  let nextButton = document.createElement("li");
  nextButton.classList.add("page-item");
  if (currentPage === pageCount) {
    nextButton.classList.add("disabled");
  }
  nextButton.innerHTML = `<a class="page-link" href="#pokemonGrid"" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
  nextButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
      pagination(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
          currentPage * limit
        }`
      );
    }
  });
  paginationContainer.appendChild(nextButton);
}

function index(totalCount, limit) {
  updatePageCount(totalCount, limit);
  updatePagination(totalCount, limit, 0);
}

let paginationComponent = { limitDisplay, pagination, index };

export default paginationComponent;
