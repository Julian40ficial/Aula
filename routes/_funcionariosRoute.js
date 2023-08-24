const router = require ("express").Router();
const controller = require("../Controller/funcionarios/funcionarios_ControllerIndex");

router.get("/ListarTodos_funcionarios", controller.listarfuncionarios);


module.exports = router;
