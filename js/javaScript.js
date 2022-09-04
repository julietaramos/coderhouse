

var precioAgregado = 100;
/*let cantidadPapas = 50;
let cantidadPalitos = 50;
let cantidadNachos = 100;
*/
var productosAgregados = "NULL";

alert("¡BIENVENIDO A SNACK APP!");
mostrarProductos();
alert(precioAgregado);
alert(productosAgregados);
mostrarMenu();

function mostrarProductos(){
    let precioProducto;
    let productoElegido;
    var cantidad;
    let producto = "0";
    producto= prompt("seleccione el procucto que quieres agregar\n 1.Papas Fritas $200\n 2.Palitos salados $180\n 3.Nachos $300\n");
    switch(producto){
        case "1": 
        precioProducto = 200;
        productoElegido= "papas";
        cantidad= prompt("¿Cantidad?");
        //validarCantidad(cantidad, cantidadPapas);
        agregarAlCarrito(precioProducto, cantidad, productoElegido);
        break;

        case "2": 
        precioProducto = 180;
        productoElegido = "palitos";
        cantidad= prompt("¿Cantidad?");
        //validarCantidad(cantidad, cantidadPalitos);
        agregarAlCarrito(precioProducto, cantidad, productoElegido);
        break;

        case "3": 
        precioProducto = 300;
        productoElegido = "nachos";
        cantidad= prompt("¿Cantidad?");
        //validarCantidad(cantidad, cantidadNachos);
        agregarAlCarrito(precioProducto, cantidad, productoElegido);
      
        break;

        case "ESC":
        break;

        default:
            alert("ingrese algo correcto")
            break;

    }


}




function agregarAlCarrito(precioProducto, cantidad, producto){
    precioAgregado = precioAgregado+ (precioProducto * cantidad);
    if (productosAgregados != "NULL"){

        productosAgregados = productosAgregados+   " - " + producto + " Cantidad: "+ cantidad;
    }
    else {
        productosAgregados = producto  + " Cantidad: "+ cantidad;
    }
}

 /*
 DESPUES PIENSO MEJOR COMO IMPLEMENTAR LA VALIDES USANDO OBJETOS Y ARRAYS
 function validarCantidad(cantidad, cantidadLimite){

    let darSi;

    if(cantidad > cantidadLimite){

        alert("NO HAY STOCK SOLO SE PUEDE COMPRAR  " + (cantidad - cantidadLimite) + " productos");
        darSi= prompt("¿te damos solo esa cantidad? poner si o no ") 
     }
    }

    */
   
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
    alert("Los productos agregados son "+ productosAgregados + "TOTAL: " + "$"+ precioAgregado);
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

