const router = require ("express").Router();


router.get("/ListarUmaCategoria", (req,res)=>{
    res.send(" entrei")
});
router.get("/ListarTodasCategorias",(req,res)=>{
    res,send("Deu bom entrei na rota")
})
module.exports=router;
