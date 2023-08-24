const { conexaoBD } = require ("../../conexaoBD/conexaoDB");

const  ListarUmCargo= (req, res) => {
    conexaoBD.all("SELECT* FROM cargo", (err, rows) => {
    
    res.send(rows)
    
    })
}
