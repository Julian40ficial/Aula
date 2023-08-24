const sqlite3 = require("sqlite3");

const conexaoBD = new sqlite3.Database("./conexaoBD/banco",
sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        console.log(err);
    }
});

module.exports = { conexaoBD }