const router = require ("express"). Router();
const Controller = require("../Controller/Categorias_prod/Categorias_prodIndex");

router.get("/ListarTodasCategorias", Controller.ListarCategorias);
router.get("/ListarUmaCategoria", Controller.ListarUmaCategoria);

module.exports=router;
