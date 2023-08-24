const router = require ("express").Router();
const controller = require("../Controller/cargo/cargo_ControllerIndex");


router.get("/ListarTodos_cargo", controller.ListarTodoscargos);
// router.get("/ListarUmcargo", controller.ListarUmCargo);

module.exports = router;