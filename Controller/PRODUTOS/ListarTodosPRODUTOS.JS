const{ conexaoBD } = require("../../conexaoBD/conexaoDB");

exports.listarTodosPRODUTOS = (req, res) => {
    conexaoBD.all("SELECT* FROM PRODUTOS", (err, rows) => {
        res.send(rows)
    });
}