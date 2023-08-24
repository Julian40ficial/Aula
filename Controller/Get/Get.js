const express= require ('express');
const app=express();
const port=5000;

//Rota get

app.get(`/Controller`, (req,res,nxt)=>{

const result= sqlite.execute('SELECT * FROM conexaoBD' );
res.status(200).json(result);

});

app.listen(port,()=>{
console.log(`servidor express rodando em http://localhost:${port}`);

});