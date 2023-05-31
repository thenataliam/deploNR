const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

app.post('/usuario', (req, res)=> {
    console.log('Cuerpo de la peticion: ', req.body);
    const {nombre, correo, telefono, mensaje}=req.body;
    console.log(nombre);
    console.log(correo);
    console.log(telefono);
    console.log(mensaje);

    res.send({message:"El usuario se ha recibido"});
})
