let addCarts = document.querySelectorAll('.add-cart');

let number = 0;

/*let products = [

    {   name: 'Crema para la cara',
        tag: 'crema_cara',
        price: 2000,
        inCart: 0
    },
    {   name: 'Crema para el cuerpo',
    tag: 'crema_cuerpo',
    price: 3000,
    inCart: 0
    },

    {   name: 'Jabon para la cara',
    tag: 'jabon_cara',
    price: 2500,
    inCart: 0
    }
]

*/

class Product{
    constructor(id,name,precio){
        this.id = id;
        this.name = name.toUpperCase();
        this.price= parseFloat(precio);
    }


}

async function fetchProducts(){
    const response= await fetch('./producto.json')
    return await response.json()
}

let products =[];

fetchProducts().then(productsJason => {
     products = productsJason;
     showProducts();
})
/*MOSTRAR PRODUCTOS*/

const seccionProducts = document.querySelector(".container2")

function showProducts(){
    for(product of products){
        const {name, tag, price, inCart}= product;
        const productHTML = `
        <div class="image">
        <img src="image/${tag}.jpg" alt="Face-Cream"> 
        <h3> ${name}</h3>
        <h3>$${price}0</h3>
        <a class="add-cart cart1" href="#">add Cart</a> 
        </div>
        `
        seccionProducts.innerHTML += productHTML
    }
}



/*TIENE LO QUE PIDE LA CLASE 12*/

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



/*TIENE LO QUE PIDE LA CLASE 12*/

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers!=null  && (document.querySelector('.cart span').textContent = productNumbers);
}




for (let i= 0; i < addCarts.length; i++){
    addCarts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        Toastify({
            text: "Agregaste " + products[i].name,
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'rgba(253, 108, 122, 1)'
            }
    
        }).showToast();
    
        })
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    } else {
    localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
 let cartItems = localStorage.getItem("productsInCart");
 cartItems = JSON.parse(cartItems); 
 let productContainer = document.querySelector(".products");
 let cartCost = localStorage.getItem('totalCost');
 if(cartItems && productContainer){
        productContainer.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
              <ion-icon name="close-circle"></ion-icon>
              <img src="./image/${item.tag}.jpg"> </img>
              <span>${item.name}</span>
              </div>
              <div class="price"> ${item.price}</div>
              <div class="quantity"> 
              <ion-icon class="decrease" name="arrow-dropleft-circle"> </ion-icon>
              <span> ${item.inCart} </span>
              <ion-icon class="increase" name="arrow-dropright-circle"> </ion-icon>
              </div>
              <div class="total">
              $${item.inCart * item.price},00
              </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                 Total Carrito
                 </h4>
                 <h4 class="basketTotal">
                 $ ${cartCost},00
        `;
}
}
fetchProducts().then(productsJason => {
    products = productsJason;
    showProducts();
})

showProducts;
onLoadCartNumbers();
displayCart(); //Para que al volver a cargar la pagina, el numero de prod en el carrito quede igual
