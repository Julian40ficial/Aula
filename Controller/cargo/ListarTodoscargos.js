const { conexaoBD } = require('../../conexaoBD/conexaoDB') ;

exports.ListarTodoscargos = (req, res) => {
    conexaoBD.all("SELECT* FROM cargo", (err, rows) => {
    
   return res.send(rows)
    
    })
}
