const express = require("express");
const router = express.Router();
const { Productos } = require("../class/classProductos");
const manejadorProductos = new Productos();

router.get("/", (req, res) => {
  const productos = manejadorProductos.getAll();
  res.status(200).json(productos);
});

router.get("/:id", (req, res) => {
  const producto = manejadorProductos.getById(req.params.id);
  res.send(producto);
});

router.post("/", (req, res) => {
  const producto = manejadorProductos.save(req.body);
  res.send(`Se recibió el producto: ${JSON.stringify(producto)}`);
});

router.put("/:id", (req, res) => {
  const producto = manejadorProductos.updateById(req.params.id, req.body);
  res.send(
    producto === undefined
      ? `Se actualizó el producto con id ${req.params.id}`
      : JSON.stringify(producto)
  );
});

router.delete("/:id", (req, res) => {
  const producto = manejadorProductos.deleteById(req.params.id);
  res.send(
    producto === undefined
      ? `Se eliminó el producto con id ${req.params.id}`
      : JSON.stringify(producto)
  );
});

module.exports = router;