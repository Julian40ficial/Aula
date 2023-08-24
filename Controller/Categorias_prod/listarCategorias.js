const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.ListarCategorias_prod= (req, res) => {
    conexaoBD.all("SELECT* FROM Categorias_prod", (err, rows) => {
        res.send(rows)
    });
}