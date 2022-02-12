const { Productos } = require("../class/classProductos");
const manejadorProductos = new Productos();
let listaCarritos = [];

class Carrito {
  static id = 1;

  getAll() {
    return listaCarritos.length == 0 ? null : listaCarritos;
  }

  new() {
    listaCarritos.push({ id: Carrito.id, productos: [] });
    Carrito.id++;
    return Carrito.id - 1;
  }

  deleteById(id) {
    const resultado = listaCarritos.find(
      (idBuscado) => idBuscado.id === parseInt(id)
    );
    let index = listaCarritos.indexOf(resultado);
    if (index == -1) {
      return { error: "Carrito no encontrado" };
    } else {
      listaCarritos.splice(index, 1);
    }
  }

  addProduct(idCarrito, producto) {
    if (manejadorProductos.isExist(producto.id)) {
      let index = listaCarritos.findIndex((carrito) => carrito.id == idCarrito);
      if (index == -1) {
        return false;
      } else {
        listaCarritos[index].productos.push(producto);
        return true;
      }      
    } else { return false }
  }

  lessProduct(idCarrito, idProducto) {
    let indexCarrito = listaCarritos.findIndex(
      (carrito) => carrito.id == idCarrito
    );
    if (indexCarrito == -1) {
      return false;
    } else {
      let indexProduct = listaCarritos[indexCarrito].productos.findIndex(
        (producto) => producto.id == idProducto
      );
      if (indexProduct == -1) {
        return false;
      } else {
        listaCarritos[indexCarrito].productos.splice(indexProduct, 1);
        return true;
      }
    }
  }
}

module.exports = { Carrito };