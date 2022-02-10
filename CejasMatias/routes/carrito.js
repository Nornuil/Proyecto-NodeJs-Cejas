const express = require('express');
const router = express.Router();
const {Carrito} = require('../class/classCarrito');
const manejadorCarrito = new Carrito();

router.post('/', (req, res) =>{
    const carrito = manejadorCarrito.new(req.body);
    res.send(`Se creó el carrito con el id: ${JSON.stringify(carrito)}`);
});

router.delete('/:id', (req, res) =>{
    const carrito = manejadorCarrito.deleteById(req.params.id);
    res.send((carrito === undefined ? `Se eliminó el producto con id ${req.params.id}` : JSON.stringify(carrito)));
});

router.get('/', (req, res) =>{
    const carrito = manejadorCarrito.getAll();
    res.send(carrito);
    console.log(carrito);
});

router.post('/:id/productos', (req, res) =>{
    let idCarrito = parseInt(req.params.id);
    let idProducto = {...req.body};
    manejadorCarrito.addProduct(idCarrito,idProducto) ? res.status(200).json({status:`Producto con id ${idProducto} agregado al carrito con id ${idCarrito}`}) : res.status(406).json({Error:`Carrito o Producto inexistente`})
});

module.exports = router;