const contenedor = document.querySelector('#contenedorProductos');
let articulos = [];

cargarEventos();
function cargarEventos(){
    document.addEventListener('DOMContentLoaded',()=>{
        obtenerDatos();
    });
}

function obtenerDatos(){
    const url = 'https://bsale-test-u6r8.onrender.com/api/producto/';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => crearHTML(resultado))
        .catch(error => console.log(error))
}

function crearHTML(resultado){
    
    // console.log(typeof(resultado));
    // let productos = JSON.parse(resultado);
    resultado.forEach(producto =>{
        const no_image = './assets/img/sin_imagen.jpg';
        const {id,name,url_image,price} = producto;
        const row = document.createElement('div');
        row.classList.add('col','py-4');
        // row.setAttribute('style','width=15rem');
        row.innerHTML = `
        <div class="card mx-auto h-100" style="width: 17rem;">
        <img src="${[url_image?url_image:no_image]}" class="card-img-top float-center" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-center">${name}</h5>
        <div class="row" >
        <div class="col-8">
        <p class="card-text">$ ${new Intl.NumberFormat('es-CL').format(price)}</p>
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


  // 


// otro metodo comprobado
// const API_URL = url;
// const xhr = new XMLHttpRequest();

// function manejador(){
//     if(this.readyState === 4 && this.status === 200){
//         console.log(this.response);
//     }
// }

// xhr.addEventListener('load', manejador);
// xhr.open("GET",`${API_URL}`);
// xhr.send();