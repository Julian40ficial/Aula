const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listarvendas = (req, res) => {
    conexaoBD.all("SELECT* FROM vendas", (err, rows) => {
        res.send(rows)
    });
}