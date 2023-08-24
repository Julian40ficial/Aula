const router = require ("express").Router();
const controller = require("../Controller/endereco/endereco_ControllerIndex");


router.get("/Listar_endereco", controller.listar_endereco);

module.exports=router;