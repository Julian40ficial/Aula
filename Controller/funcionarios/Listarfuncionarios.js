const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listarfuncionarios = (req, res) => {
    conexaoBD.all("SELECT* FROM funcionarios", (err, rows) => {
        res.send(rows)
    });
}