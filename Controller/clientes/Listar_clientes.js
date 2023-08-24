const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listar_clientes = (req, res) => {
    conexaoBD.all("SELECT* FROM clientes", (err, rows) => {
        res.send(rows)
    });
}