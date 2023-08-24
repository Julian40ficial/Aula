const express = require ('express');
const app= express();
require ("dotenv").config();
const PORTA= 5000;

app.use(require("./routes/_routesIndex"));

 

app.use("/",(req,res)=>{
    console.log(req.url, req.method, req.ip, req.body);
return res.status(404).send('rota não encontrada.');
});

const port=process.env.PORTA;

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost${5000}`);
})

