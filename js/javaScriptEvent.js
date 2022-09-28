let addCarts = document.querySelectorAll('.add-cart');

let number = 0;

let products = [

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

class Product{
    constructor(id,name,precio){
        this.id = id;
        this.name = name.toUpperCase();
        this.price= parseFloat(precio);
    }


}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems); //paso de JSON a JS object
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){ //undefined es porque ese obj no esta en el JSON
            cartItems = {
                ...cartItems, //agarro todo lo que esaba en el cartItems 
                [product.tag]: product //Agrego el nuevo producto
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
    product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        //Uso el stingify para no pasarlo como objeto. 
}





function cartNumbers(product){

 let productNumbers = localStorage.getItem('cartNumbers');
 //El tipo que trae es string//
 productNumbers= parseInt(productNumbers);
 if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers +1;
 } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = productNumbers;
 }
 setItems(product);
}





function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
    } 
}




for (let i= 0; i < addCarts.length; i++){
    addCarts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        })
}


onLoadCartNumbers(); //Para que al volver a cargar la pagina, el numero de prod en el carrito quede igual
