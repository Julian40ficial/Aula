const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.ListarUmaCategoria= (req, res) => {
    conexaoBD.all("SELECT* FROM Categorias_prod", (err, rows) => {
        res.send(rows)
    });
}