let listaProductos = [];

class Productos {
  static id = 1;

  getAll() {
    return listaProductos.length == 0 ? [] : listaProductos;
  }

  getById(id) {
    const resultado = listaProductos.find(
      (idBuscado) => idBuscado.id == parseInt(id)
    );
    if (resultado === undefined) {
      return { error: "producto no encontrado" };
    } else {
      return resultado;
    }
  }

  isExist(id) {
    const resultado = listaProductos.find(
      (idBuscado) => idBuscado.id == parseInt(id)
    );
    if (resultado === undefined) {
      return false;
    } else {
      return true;
    }
  }

  save(producto) {
    if (producto.timestamp && producto.name && producto.descripcion && producto.code && producto.thumbnail && producto.price && producto.stock) {
      producto.id = Productos.id;
      listaProductos.push(producto);
      Productos.id++;
      return producto;
    } else {
      return "Campo de producto faltante";
    }
  }

  updateById(id, producto) {
    const resultado = listaProductos.find(
      (idBuscado) => idBuscado.id === parseInt(id)
    );

    if (resultado === undefined) {
      return { error: "Producto no encontrado" };
    } else {
      if (producto.timestamp && producto.name && producto.descripcion && producto.code && producto.thumbnail && producto.price && producto.stock) {
        resultado.timestamp = producto.timestamp;
        resultado.name = producto.name;
        resultado.descripcion = producto.descripcion;
        resultado.code = producto.code;
        resultado.thumbnail = producto.thumbnail;
        resultado.price = producto.price;
        resultado.stock = producto.stock;
      } else {
        return "No es el formato de producto que podes ingresar";
      }
    }
  }

  deleteById(id) {
    const resultado = listaProductos.find(
      (idBuscado) => idBuscado.id === parseInt(id)
    );

    if (resultado === undefined) {
      return { error: "Producto no encontrado" };
    } else {
      listaProductos = listaProductos.filter(
        (idEliminado) => idEliminado.id !== parseInt(id)
      );
    }
  }
}

module.exports = { Productos };