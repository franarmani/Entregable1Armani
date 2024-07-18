const productos = [
    { id: 1, nombre: 'Remera', precio: 500, imagen: 'img/productos/remera.jpeg' },
    { id: 2, nombre: 'Short', precio: 700, imagen: 'img/productos/short.jpeg' },
    { id: 3, nombre: 'Buzo', precio: 1200, imagen: 'img/productos/buzo.jpeg' },
    { id: 4, nombre: 'Joggin', precio: 300, imagen: 'img/productos/joggin.jpeg' }
];

let carrito = [];
let totalAcumulado = 0;

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        totalAcumulado += producto.precio;
        alert(`${producto.nombre} agregado al carrito`);
        document.getElementById('carrito-total').textContent = `Total acumulado: $${totalAcumulado}`;
    }
}

function verCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    let mensaje = 'Carrito:\n';
    carrito.forEach(producto => {
        mensaje += `${producto.nombre} - $${producto.precio}\n`;
    });
    mensaje += `\nTotal: $${totalAcumulado}`;
    alert(mensaje);
}

function vaciarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito ya está vacío');
        return;
    }

    carrito = [];
    totalAcumulado = 0;
    document.getElementById('carrito-total').textContent = `Total acumulado: $${totalAcumulado}`;
    alert('Carrito vaciado');
}

const productosContainer = document.getElementById('productos-container');

productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    `;
    productosContainer.appendChild(productoDiv);
});