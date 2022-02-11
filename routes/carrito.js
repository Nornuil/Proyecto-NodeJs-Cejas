const express = require("express");
const router = express.Router();
const { Carrito } = require("../class/classCarrito");
const manejadorCarrito = new Carrito();

router.post("/", (req, res) => {
  const carrito = manejadorCarrito.new(req.body);
  res
    .status(200)
    .json(`Se creó el carrito con el id: ${JSON.stringify(carrito)}`);
});

router.delete("/:id", (req, res) => {
  const carrito = manejadorCarrito.deleteById(req.params.id);
  res
    .status(200)
    .json(
      carrito === undefined
        ? `Se eliminó el carrito con id ${req.params.id}`
        : JSON.stringify(carrito)
    );
});

router.get("/", (req, res) => {
  const carrito = manejadorCarrito.getAll();
  res.status(200).json(carrito);
});

router.post("/:id/productos", (req, res) => {
  let idCarrito = parseInt(req.params.id);
  let Producto = { ...req.body };
  manejadorCarrito.addProduct(idCarrito, Producto)
    ? res
        .status(200)
        .json({
          status: `Producto con id ${Producto.id} ha sido agregado al carrito con id ${idCarrito}`,
        })
    : res.status(406).json({ Error: `Carrito o Producto inexistente` });
});

router.delete("/:id/productos/:id_prod", (req, res) => {
  let idCarrito = parseInt(req.params.id);
  let idProducto = parseInt(req.params.id_prod);
  manejadorCarrito.lessProduct(idCarrito, idProducto)
    ? res
        .status(200)
        .json({
          status: `Producto con id ${idProducto} se a quitado del carrito con id ${idCarrito}`,
        })
    : res.status(406).json({ Error: `Carrito o Producto inexistente` });
});

module.exports = router;