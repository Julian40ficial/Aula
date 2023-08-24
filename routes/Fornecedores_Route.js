const router = require ("express").Router();
const controller = require("../Controller/Fornecedores/Fornecedores_ControllerIndex");

router.get("/ListarTodosFornecedores", controller.listarTodosFornecedores);

module.exports=router;