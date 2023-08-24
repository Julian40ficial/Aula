const router = require ("express").Router();
const controller = require("../Controller/vendas/Controller_vendas_Index");

router.get("/Listarvendas", controller.listarvendas);

module.exports=router;