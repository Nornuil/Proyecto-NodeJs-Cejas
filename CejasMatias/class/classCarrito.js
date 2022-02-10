const {Productos} = require('../class/classProductos');
const manejadorProductos = new Productos();

class Carrito {
  static id = 1;

  constructor() {
    this.carrito = [];
  }

  getAll() {
    return this.carrito.length == 0 ? null : this.carrito;
  }

  // getById(id) {
  //   const resultado = this.productos.find((idBuscado) => idBuscado.id === parseInt(id));
  //   if (resultado === undefined) {
  //     return { error: "producto no encontrado" };
  //   } else {
  //     return resultado;
  //   }
  // }

  new() {
    this.carrito.push({ id: Carrito.id, productos: [] });
    Carrito.id++;
    return Carrito.id - 1;
  }

  // updateById(id, producto) {
  //   const resultado = this.productos.find(
  //     (idBuscado) => idBuscado.id === parseInt(id)
  //   );

  //   if (resultado === undefined) {
  //     return { error: "producto no encontrado" };
  //   } else {
  //     if (producto.title && producto.price && producto.thumbnail) {
  //       resultado.title = producto.title;
  //       resultado.price = producto.price;
  //       resultado.thumbnail = producto.thumbnail;
  //     } else {
  //       return "No es el formato de producto que podes ingresar";
  //     }
  //   }
  // }

  deleteById(id) {
    const resultado = this.carrito.find((idBuscado) => idBuscado.id === parseInt(id));
    let index = this.carrito.indexOf(resultado);
    if (index == -1) {
      return { error: "Carrito no encontrado" };
    } else {
      this.carrito.splice(index, 1);
    }
  }

  addProduct(idCarrito,idProducto){
    //   console.log(`el id de producto es ${idProducto.id}`);
    // const index = this.carrito.find((idBuscado) => idBuscado.id === parseInt(idCarrito));
    // console.log(`el index es ${index}`);
    console.log(`el id del producto ${idProducto.id}`);
    // console.log(manejadorProductos.isExist(idProducto.id));
    const producto = manejadorProductos.getById(idProducto.id);
    console.log(producto);
    // this.carrito[0].productos.push(manejadorProductos.getById(idProducto.id))
    // this.carrito[index].productos.push(manejadorProductos.getById(idProducto)[0])
  }
}
  
  
  module.exports = {Carrito};