const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listarTodosFornecedores = (req, res) => {
    conexaoBD.all("SELECT* FROM Fornecedores", (err, rows) => {
        res.send(rows)
    });
}