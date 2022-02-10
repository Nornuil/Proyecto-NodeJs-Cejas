class Productos {
  static id = 1;

  constructor() {
    this.productos = [];
  }

  getAll() {
    return this.productos.length == 0 ? null : this.productos;
  }

  isExist(id){
    const producto = this.productos.find(producto => producto.id === id)
     return producto ? producto : null
  }

  getById(id) {
    const resultado = this.productos.find((idBuscado) => idBuscado.id == parseInt(id));
    if (resultado === undefined) {
      return { error: "producto no encontrado" };
    } else {
      return resultado;
    }
  }

  save(producto) {
    if (producto.title && producto.price && producto.thumbnail) {
      producto.id = Productos.id;
      this.productos.push(producto);
      Productos.id++;
      return producto;
    } else {
      return "Campo de producto faltante";
    }
  }

  updateById(id, producto) {
    const resultado = this.productos.find(
      (idBuscado) => idBuscado.id === parseInt(id)
    );

    if (resultado === undefined) {
      return { error: "producto no encontrado" };
    } else {
      if (producto.title && producto.price && producto.thumbnail) {
        resultado.title = producto.title;
        resultado.price = producto.price;
        resultado.thumbnail = producto.thumbnail;
      } else {
        return "No es el formato de producto que podes ingresar";
      }
    }
  }

  deleteById(id) {
    const resultado = this.productos.find((idBuscado) => idBuscado.id === parseInt(id));

    if (resultado === undefined) {
      return { error: "producto no encontrado" };
    } else {
      this.productos = this.productos.filter((idEliminado) => idEliminado.id !== parseInt(id));
    }
  }
}


module.exports = {Productos};