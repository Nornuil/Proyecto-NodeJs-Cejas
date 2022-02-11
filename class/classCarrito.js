const {listaProductos} = require('../class/classProductos');

let listaCarritos = [];

class Carrito {
  static id = 1;

  getAll() {
    return listaCarritos.length == 0 ? null : listaCarritos;
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
    listaCarritos.push({ id: Carrito.id, productos: [] });
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
    let index = listaCarritos.findIndex((carrito) => carrito.id == idCarrito);
    console.log(index);
    if(index == -1){
        return false
    } else{
        listaCarritos[index].productos.push(producto);
        return true
    }
  }

  lessProduct(idCarrito, idProducto) {
    let indexCarrito = listaCarritos.findIndex((carrito) => carrito.id == idCarrito);
    console.log(`indice de carrito ${indexCarrito}`);
    if(indexCarrito == -1){
        return false
    } else{
        let indexProduct = listaCarritos[indexCarrito].productos.findIndex((producto) => producto.id == idProducto);
        console.log(`indice de producto ${indexProduct}`);
        if(indexProduct == -1){
            return false
        } else{
            listaCarritos[indexCarrito].productos.splice(indexProduct,1)
            return true
        }
    }
  }
}
  
  
  module.exports = {Carrito};