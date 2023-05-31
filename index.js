const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
const lista=[];
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

app.get('/getUsuarios', (req, res) => {
 res.json(lista);
});

app.post('/usuario', (req, res)=> {
    const list=req.body.user;
 lista.push(list);
 res.json("usuario añadido);
});

 app.get('/', (req, res) => {
  res.send('La api funciona');
 });
module.exports = app;
