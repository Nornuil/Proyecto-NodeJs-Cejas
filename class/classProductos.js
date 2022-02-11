let listaProductos = [];

class Productos {
  static id = 1;

  getAll() {
    return listaProductos.length == 0 ? null : listaProductos;
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

  save(producto) {
    if (producto.title && producto.price && producto.thumbnail) {
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
    const resultado = listaProductos.find(
      (idBuscado) => idBuscado.id === parseInt(id)
    );

    if (resultado === undefined) {
      return { error: "producto no encontrado" };
    } else {
      listaProductos = listaProductos.filter(
        (idEliminado) => idEliminado.id !== parseInt(id)
      );
    }
  }
}

module.exports = { Productos, listaProductos };