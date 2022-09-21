/*
let contenedorProductos= document.createElement("div");

let contenedorCarrito = document.createElement("carrito");

class Product{
    constructor(id,nombre,precio){
        this.id = id;
        this.name = name.toUpperCase();
        this.price= parseFloat(precio);
    }


}
let products = [new Producto(01,"crema para la cara", 2000), new Producto(02,"crema para el cuerpo",3000),new Producto(03,"jabon para la cara", 25000)]

let cart = [];

function addCart(id,cant) {
    let productId= id; 
    let cant = cant;
    let product = products.find(p => p.id ===productId);
    producto.cant = cant;
    product.total = product.price * cant;
    cart.push(product);
}


function totalCart(carrit){
    let total = 0;
    carrit.forEach(producto => {total += product.total})
    return total;
}


function mostrarCarrito(carrito){
    let muestroCarrito = " ";
    for (const c of carrito){
        muestroCarrito = muestroCarrito + " Producto: " +c.nombre + " Cantidad: " +  c.cantidad + "\n";
    }
    alert(muestroCarrito);
}






function mostrarProductos(){
    let cantidad;
    let producto = "0";
    producto= prompt("seleccione el procucto que quieres agregar\n 1.Papas Fritas $200\n 2.Palitos salados $180\n 3.Nachos $300\n");
    switch(producto){
        case "1": 
        cantidad= prompt("¿Cantidad?");
        addCarrito(01, cantidad);
        break;

        case "2": 
        cantidad= prompt("¿Cantidad?");
        addCarrito(02, cantidad);
        
        break;

        case "3": 
        cantidad= prompt("¿Cantidad?");
        addCarrito(03, cantidad);
        break;

    }


}


   
function mostrarMenu(productosEnStock, carrito){
    let opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.PAGAR\n ESC.SALIR");
       while(opcionMenu != 'ESC') {

        switch(opcionMenu){
        case "1": 
        mostrarProductos(productosEnStock);
        break;

        case "2": 
        mostrarCarrito(carrito);
        break;

        case "3": 
        finalizarCompra(carrito);
        alert("GRACIAS POR COMPRAR");
        break;

        case 'ESC':
        alert("Gracias por elegirnos");
        break;
        
        default:
        alert("Ingresar algo valido");
        break;


         }
        opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.PAGAR\n ESC.SALIR");
    }





function finalizarCompra(carrito){

    let precioFinal = totalCarrito(carrito);
    let precioCuota;
    let formaDePago = prompt ("seleccione la forma de pago \n 1.Transferencia con 15% de descuento\n 2.Tarjeta de credito sin cuotas\n 3.Tarjeta de credito con 3 cuotas con interes del 10% \n");
    switch(formaDePago){
        case "1": 
        precioFinal = precioFinal* 0.85;
        break;

        case "2": 
        precioFinal = precioFinal;
        break;

        case "3": 
        precioFinal = precioFinal * 1.10;
        precioCuota = precioFinal / 3;
        break;
    }

    alert ("EL PRECIO FINAL ES " + precioFinal);
    if (formaDePago == "3"){
        alert ("LAS CUOTAS SON 3 DE  " + precioCuota);
    }

}
}


/*function escribirProductos(contenedor){
  for (const producto of productos){

        contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio} </b>`
     

    document.body.appendChild(contenedor);
        
    }
}*/


/*


alert("¡BIENVENIDO A SNACK APP!");
mostrarProductos(productos, carrito);
mostrarMenu(productos, carrito);

const titulo = document.getElementById("seleccion");

titulo.textContent = `USTED SELECCIONO:` 

for (const c of carrito){

    contenedorCarrito.innerHTML = `<h3> Producto: ${c.nombre} </h3>
                                   <p> cantidad: ${c.cantidad}</p>`;
 
    document.body.appendChild(contenedorCarrito);
    
}
*/




/*let products = [

    {   name: 'Crema para la cara',
        tag: 'FaceCream',
        price: 2000,
        inCart: 0
    },
    {   name: 'Crema para el cuerpo',
    tag: 'BodyCream',
    price: 3000,
    inCart: 0
    },

    {   name: 'Jabon para la cara',
    tag: 'FaceSoap',
    price: 2500,
    inCart: 0
    }
]
*/
/*function addProductToCart(id,cant) {
    let productId= id; 
    let cant = cant;
    let product = products.find(p => p.id ===productId);
    product.cant = cant;
    product.total = product.price * cant;
    cart.push(product);
}

*/

//let containerCart = document.createElement("carrito");
//let products = [new Product(1,"crema para la cara", 2000), new Product(2,"crema para el cuerpo",3000),new Product(3,"jabon para la cara", 25000)]

//let cart = [];


/*function totalCart(cart){
    let total = 0;
    cart.forEach(product => {total += product.total})
    return total;
}*/

let addCarts = document.querySelectorAll('.add-cart');

let number = 0;

class Product{
    constructor(id,name,precio){
        this.id = id;
        this.name = name.toUpperCase();
        this.price= parseFloat(precio);
    }


}
function loadCart(num){
    document.querySelector('.cart span').textContent = number;
    }

for (let i= 0; i < addCarts.length; i++){
    addCarts[i].addEventListener('click',()=>{
        number = number + 1;
        loadCart(number);
        })
}




    /*for (const c of cart){

        containerCart.innerHTML = `<h3> Producto: ${c.nombre} </h3>
                                       <p> cantidad: ${c.cantidad}</p>`;
     
        document.body.appendChild(containerCart);

    }


/*


function loadCartNumbers(){

    let productNumbers = localStorage.getItem('cartNumers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    console.log("producto", product);
    let ProductNumers = localStorage.getItem('cartNumbers');
    productNumers= parseInt(productNumbers);
    if(productNumers){
        localStorage.setItem('cartNumbers', productNumers + 1);
        document.querySelector('.cart span').textContent = productNumers + 1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

} 

loadCartNumbers();

*/