const router = require ("express").Router();
const controller = require("../Controller/PRODUTOS/PRODUTOS_ControllerIndex");

router.get("/ListarUmProduto", controller.ListarUmProduto);

module.exports=router;