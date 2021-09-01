const mysql = require('mysql');
const bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_boutique'
});

bd.connect((err)=>{
    if(err){
        console.log("Error BD: ", err);
        return err;
    }
    console.log("Connexion réussie !");
});

module.exports = bd;