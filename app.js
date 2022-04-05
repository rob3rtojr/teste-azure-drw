const express = require('express')
const app = express();
var port = process.env.PORT || 3000;
app.get('/',(req,res) => res.send('Deu certo!'));
app.listen(port, ()=> console.log('Servidor rodando na porta ' + port));
