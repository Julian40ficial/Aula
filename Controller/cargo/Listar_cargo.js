const { conexaoBD } = require ("../../conexaoBD/conexaoDB");

exports.listar_cargo = (req, res) => {
    conexaoBD.all("SELECT* FROM cargo", (err, rows) => {
    
    res.send(rows)
    
    })
}
