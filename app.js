// JavaScript code for managing the budget and adding products to the cart
class ShoppingCart {
    constructor() {
        this.presupuesto = 0;
        this.cart = [];
    }

    setPresupuesto(amount) {
        this.presupuesto = amount;
        document.getElementById("montoPresupuesto").textContent = amount;
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.setPresupuesto(100);

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        const listaProductos = document.getElementById('productList');
        json.forEach(product => {
            listaProductos.innerHTML += `
                <figure class="productCard">
                <img class="imagenProducto" src="${product.image}" alt="${product.title}">
                <figcaption>
                <h3>${product.title}</h3>
                <span class="productPrice">${product.price}</span>
                <button id="addCarrito" class="añadirAlCarrito">Añadir al carrito</button>
                <button id="eliminarCarrito" class="eliminarDelCarrito">Eliminar del carrito</button>
                </figcaption>
                </figure>
            `
        });
    })
    .catch(error => document.write('No fue posible obtener los productos', error));

document.addEventListener('DOMContentLoaded', () => {
    const btnReset = document.getElementById('btnReset');
    btnReset.addEventListener('click', resetCart);
    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            const removedProduct = cart.splice(index, 1)[0];
            budget += removedProduct.quantity * getProductPrice(productId);
            updateCartDisplay();
            showError('');
        }
    } function addToCart(productId, productPrice) {
        if (budget >= productPrice) {
            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    quantity: 1,
                });
            }

            budget -= productPrice;
            updateCartDisplay();
            showError('');
        } else {
            showError('No tienes suficiente presupuesto para este producto.');
        }
    }
});

function getProductPrice(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.price : 0;
}


function updateCartDisplay() {
    console.log('Carrito actualizado:', cart);
    console.log('Presupuesto restante:', budget);
}

const addCart = document.getElementById('addCarrito');
addCart.addEventListener('click', () => {
    addToCart(1, 10);
    console.log(cart)
});

const removeCart = document.getElementById('eliminarCarrito');
removeCart.addEventListener('click', () => {
    removeFromCart(1);
    console.log(cart)
});