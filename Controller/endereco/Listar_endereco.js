const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listar_endereco= (req, res) => {
    conexaoBD.all("SELECT* FROM endereco", (err, rows) => {
        res.send(rows)
    });
}