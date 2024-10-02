// myName = "john Do"
// console.log("Hello " + myName);
class Product 
{
    constructor(id, name, price)
    {
        this.id = id;
        this.name = name;
        this.price = price
    }
}

class ShoppingCart
{
    constructor()
    {
        this.products = new Set()
    }

    addProduct(product)
    {
        this.products.add(product)
    }
    removeProduct(name)
    {
        for (let x of this.products)
            if (x.name == name)
        this.products.remove(x)
    }
    calTotal()
    {
        let sum=0
        for (let x of this.products)
            sum+= x.price
        return sum
    }

    displayCart()
    {
        for (let x of this.products)
            console.log( x.id +''+ x.name +''+ x.price)
    }
}

let product1 = new Product(1,"Banana", 3)
let cart = new ShoppingCart()

cart.addProduct(product1)
cart.displayCart()
console.log("Total "+ cart.calTotal());