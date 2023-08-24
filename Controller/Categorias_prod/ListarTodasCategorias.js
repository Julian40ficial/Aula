const { conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.ListarCategorias = (req, res) => {
    conexaoBD.all("SELECT * FROM categorias_prod ", (err, rows) => {
        res.send(rows)
    })

}