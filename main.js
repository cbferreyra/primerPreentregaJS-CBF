const productos = [
  { id: 1, articulo: "Grande Muzzarella", precio: 1000 },
  { id: 2, articulo: "Grande Jamón y Morrones", precio: 1500 },
  { id: 3, articulo: "Grande Fugazzeta", precio: 1400 },
  { id: 4, articulo: "Grande  Napolitana", precio: 1300 },
  { id: 5, articulo: "Chica Muzzarella", precio: 700 },
  { id: 6, articulo: "Chica Jamón y Morrones", precio: 1000 },
  { id: 7, articulo: "Chica Fugazzeta", precio: 800 },
  { id: 8, articulo: "Chica Napolitana", precio: 1200 },
  { id: 9, articulo: "Empanada Carne", precio: 140 },
  { id: 10, articulo: "Empanada Pollo", precio: 140 },
  { id: 11, articulo: "Empanada Jamón y Queso", precio: 140 },
  { id: 12, articulo: "Empanada Verdura", precio: 140 },
  { id: 13, articulo: "Cerveza Imperial 1 l.", precio: 140 },
  { id: 14, articulo: "Agua saborizada Aquarius Pomelo 1 l.", precio: 140 },
  { id: 15, articulo: "Coca Cola 1.5 l.", precio: 140 },
];

const carrito = [];

function agregarProducto(producto) {
  carrito.push(producto);
  console.log(carrito);
}

function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
}

function agregarAlCarrito() {
  let salida = "Por favor, seleccione el producto para agregar al caarrito \n";

  for (let producto of productos) {
    salida +=
      producto.id +
      "  " +
      producto.articulo +
      "..........." +
      "$" +
      producto.precio +
      "\n";
  }
  let eleccionProducto = prompt(salida);
  return eleccionProducto;
}
let productoElegido = agregarAlCarrito();

alert(productoElegido);
