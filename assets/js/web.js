// const card = document.querySelector('.card');
const contenedor = document.querySelector('#contenedorProductos');
let articulos = [];


cargarEventos();
function cargarEventos(){
    document.addEventListener('DOMContentLoaded',()=>{
        crearHTML();
    });
}

function crearHTML(){
    articulos = [...productos];
    articulos.forEach(producto=>{
        const {id,name,url_image,price} = producto;
        const row = document.createElement('div');
        row.classList.add('col');
        row.innerHTML = `
        <div class="card" style="width: 15rem;">
        <img src="${url_image}" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-center">${name}</h5>
        <div class="row" >
        <div class="col-8">
        <p class="card-text">$ ${price}</p>
        </div>
        <div class="col-4">
        <a href="#" class="btn btn-outline-primary" data-id="${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
        </svg>
        </i></a>
        </div>
        </div>
        </div>
        </div>
            `;
        contenedor.appendChild(row);
    });


}



// {/* <div class="col"></div> */}