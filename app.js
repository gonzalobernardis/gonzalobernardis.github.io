var app = new Vue({
    el: '#app',
    data: {
        productos: [
            {
                id: 1,
                nombre: "Zapatillas Sarkany",
                uso: "Zapatillas",
                precio: 15000,
                imagen: "images/zapatilla-sarkany.jpeg"
            },
            {
                id: 2,
                nombre: "Zapatillas Adidas",
                uso: "Zapatillas",
                precio: 12000,
                imagen: "images/zapatilla-adidas.jpeg"
            },
            {
                id: 3,
                nombre: "Zapatillas Diadora",
                uso: "Zapatillas",
                precio: 25000,
                imagen: "images/zapatilla-diadora.jpeg"
            },
            {
                id: 4,
                nombre: "Remera Topper",
                uso: "Remeras",
                precio: 27500,
                imagen: "images/remera-topper.jpeg"
            },
            {
                id: 5,
                nombre: "Remera Puma",
                uso: "Remeras",
                precio: 18000,
                imagen: "images/remera-puma.jpeg"
            },
            {
                id: 6,
                nombre: "Pantalones Nike",
                uso: "Pantalones",
                precio: 13000,
                imagen: "images/pantalones-nike.jpeg"
            },
            {
                id: 7,
                nombre: "Conjunto Topper",
                uso: "Conjunto",
                precio: 58000,
                imagen: "images/conjunto-topper.jpeg"
            },
            {
                id: 8,
                nombre: "Conjunto Puma",
                uso: "Conjunto",
                precio: 64000,
                imagen: "images/conjunto-puma.jpeg"
            },
            {
                id: 9,
                nombre: "Buzo Topper",
                uso: "Buzo",
                precio: 40000,
                imagen: "images/buzo-topper.jpeg"
            },
            {
                id: 10,
                nombre: "Buzo Puma",
                uso: "Buzo",
                precio: 8000,
                imagen: "images/buzo-puma.jpeg"
            }
        ],
        carrito: [],
        filtroCategoria: ''
    },
    methods: {
        noExistenProductos() {
            return this.carrito.length == 0;
        },
        agregarProductoAlCarrito(productId) {
            const producto = this.productos.find(item => item.id === productId);
            if (producto) {
                this.carrito.push(producto)
            }
        },
        eliminarDelCarrito(index) {
            this.carrito.splice(index, 1);
        },
        filtrarProductos(categoria) {
            this.filtroCategoria = categoria;
        },
        mostrarTodosProductos() {
            this.filtroCategoria = '';
        }
    },
    computed: {
        carritoTotal: function () {
            let total = 0;
            this.carrito.forEach(productoComprado => {
                total += productoComprado.precio
            });
            return total;
        },
        productosFiltrados() {
            if (!this.filtroCategoria) {
                return this.productos;
            }
            return this.productos.filter(producto => producto.uso === this.filtroCategoria);
        }
    }
})

const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("sw.js");
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();


navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
        registration.unregister();
    }
});