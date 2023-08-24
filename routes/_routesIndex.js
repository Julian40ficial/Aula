const router = require("express").Router();
const rotaPadrao = "/apiMercado/";

router.use(rotaPadrao+"categorias_prod",  require("./categoria_prodRoute"));
router.use( require("./_funcionariosRoute"));
router.use( require("./_clientesRoute"));
router.use( require("./vendas_routes"));
router.use( require("./PRODUTOS_Routes"));
router.use( require("./Fornecedores_Route"));
router.use( require("./enderecos_Routes"));
router.use(rotaPadrao+"cargo", require("./cargoRoute"));


//apiMercado/categorias_prod/ListarTodasCategorias


module.exports=router;