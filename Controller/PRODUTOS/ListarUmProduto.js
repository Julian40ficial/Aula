const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.ListarUmProduto = (req, res) => {
    conexaoBD.all("SELECT* FROM PRODUTOS", (err, rows) => {
        res.send(rows)
    });
}