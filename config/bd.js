const mysql = require('mysql');
const bd = mysql.createConnection({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b7f216d928a1f3',
    password: 'd67b45a4',
    database: 'heroku_058f16b20ed31f8'
});

// const bd = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bd_ib_app'
// });

bd.connect((err)=>{
    if(err){
        console.log("Error BD: ", err);
        return err;
    }
    console.log("Connexion réussie !");
});

module.exports = bd;