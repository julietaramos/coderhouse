


//var precioAgregado = totalCarrito();
//productosAgregados = "NULL";

alert("¡BIENVENIDO A SNACK APP!");
mostrarProductos();
mostrarMenu();


function totalCarrito(){
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0);
alert("el total es " + total);
}

class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase();
        this.precio= parceFloat(precio);
    }
}


const productosEnStock =[];
productosEnStock.push(new Producto(papas, 200));
productosEnStock.push(new Producto(palitos,180));
productosEnStock.push(new Producto(nachos, 300));

const carrito = [];
class ProductosCarrito{
    constructor(nombre, cantidadSeleccionada, precio){
        this.nombre = nombre.toUpperCase();
        this.cantidadSeleccionada = cantidadSeleccionada;
        this.precio= parceFloat(precio);
    }

    total(){
        this.cantidadSeleccionada * this.precio
    }

}


function mostrarProductos(){
    let precioProducto;
    let productoElegido;
    var cantidad;
    let producto = "0";
    producto= prompt("seleccione el procucto que quieres agregar\n 1.Papas Fritas $200\n 2.Palitos salados $180\n 3.Nachos $300\n");
    switch(producto){
        case "1": 
        cantidad= prompt("¿Cantidad?");
        carrito.push(new ProductosCarrito(papas, cantidad, 100));
        break;

        case "2": 
        cantidad= prompt("¿Cantidad?");
        carrito.push(new ProductosCarrito(palitos, cantidad, productosEnStock[1].precio));
        break;

        case "3": 
        cantidad= prompt("¿Cantidad?");

        carrito.push(new ProductosCarrito(papas, cantidad, productosEnStock[2].precio));
        break;

        case "ESC":
        break;

        default:
            alert("ingrese algo correcto")
            break;

    }


}


   
function mostrarMenu(){
    let opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.FINALIZAR COMPRA");

    do {
        switch(opcionMenu){
         case "1": 
        mostrarProductos();
        break;

        case "2": 
        mostrarCarrito();
        break;

        case "3": 
        finalizarCompra();
        alert("GRACIAS POR COMPRAR");
        break;

    

        default:
        alert("poner opcion correcta")
            break;

        }

        if (opcionMenu != "3"){

        opcionMenu =prompt("1.SEGUIR COMPRANDO \n 2. CARRITO\n 3.FINALIZAR COMPRA \n");
        }

        if(opcionMenu =="3"){
            finalizarCompra();
            alert("GRACIAS POR COMPRAR");
        }

    } while(opcionMenu != "3");

}



function mostrarCarrito(){
    for (const producto of carrito){
        alert ("Producto: " +producto.nombre + " Cantidad: " +  producto.cantidadSeleccionada);
    }
}


function finalizarCompra(){

    let precioFinal;
    let precioCuota;
    let formaDePago = prompt ("seleccione la forma de pago \n 1.Transferencia con 15% de descuento\n 2.Tarjeta de credito sin cuotas\n 3.Tarjeta de credito con 3 cuotas con interes del 10% \n");
    switch(formaDePago){
        case "1": 
        precioFinal = precioAgregado * 0.85;
        break;

        case "2": 
        precioFinal = precioAgregado;
        break;

        case "3": 
        precioFinal = precioAgregado * 1.10;
        precioCuota = precioFinal / 3;
        break;
    }

    alert ("EL PRECIO FINAL ES " + precioFinal);
    if (formaDePago == "3"){
        alert ("LAS CUOTAS SON 3 DE  " + precioCuota);
    }

}
