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
