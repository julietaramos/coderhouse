
let contenedorProductos= document.createElement("div");

let contenedorCarrito = document.createElement("carrito");

class Producto{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio= parseFloat(precio);
    }

    mostrarProducto(){
        return this.nombre + " " + "$" + this.precio;
    }
}
let productos = [new Producto(01,"papas", 200), new Producto(02,"palitos",180),new Producto(03,"nachos", 300)]

let carrito = [];

function addCarrito(id,cant) {
    let productoId= id; 
    let cantidad = cant;
    let producto = productos.find(product => product.id ===productoId);
    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;
    carrito.push(producto);
}


function totalCarrito(carrito){
    let total = 0;
    carrito.forEach(producto => {total += producto.total})
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
    let opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.FINALIZAR COMPRA");
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
        opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.FINALIZAR COMPRA");
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
