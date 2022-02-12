const express = require("express")
const productos = require("./routes/productos")
const carrito = require("./routes/carrito")
const mdwRoute = require("./middlewares/mdw_url");
const mdwAdmin = require("./middlewares/mdw_admin");

const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(mdwAdmin.isAdmin);
app.use('/api/productos',productos);
app.use('/api/carrito',carrito);
app.use(mdwRoute.ruta_invalida);

const server = app.listen(PORT, () => console.log(`Servidor listo en el puerto ${PORT} ...`))

server.on('error', error => console.log(`Error en el servidor... Error: ${error}`));