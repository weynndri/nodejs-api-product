const express = require("express");
const cors = require("cors");
const bd = require("./config/bd");

var app = express();

// DATA PARSE
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors());

// === MY PROCESS | API REST

// GET PRODUCT LISTE
app.get('/api/products/', (req, res)=>{
    bd.query('SELECT * FROM product', (err, data)=>{
        if(err){
            return err;
        }
        res.json({products:data});
    });

});


// GET PRODUCT BY ID
app.get('/api/products/:id', (req, res)=>{
    // console.log(req.params.id);
    const ID = req.params.id;
    const sql = "SELECT * FROM product WHERE id = ?";

    bd.query(sql, [ID], (err, data)=>{
        if(err){
            return err;
        }
        res.json({product:data});
    });

});


// UPDATE PRODUCT BY ID
app.put('/api/products/:id', (req, res)=>{
    // console.log(Object.values(req.query));
    // console.log(Object.values(req.params.id[0]));
    
    const values = Object.values(req.query);
    const sql = "UPDATE product SET name=?, description=?, price=?, inStock=? WHERE id=?";

    bd.query(sql, values, (err, result)=>{
        if(err){ 
            console.log(err);
            return err; 
        }
        // console.log("isOkey");
        res.json({message:'Modified!'});
    });

});



// DELETE PRODUCT BY ID
app.delete('/api/products/:id', (req, res)=>{
    // console.log(req.params.id);
    const ID = req.params.id;
    
    const sql = "DELETE FROM product WHERE id=?";

    bd.query(sql, [ID], (err, result)=>{
        if(err){ 
            console.log(err);
            return err; 
        }
        // console.log("isOkey");
        res.json({message:'Deleted!'});
    });

});


// ADD PRODUCT
app.post('/api/products/', (req, res)=>{
    // console.log(req.body);
    // console.log(res.json());
    // console.log(req.query);
    // console.log(Object.values(req.query));

    const values = Object.values(req.query);
    const sql = "INSERT INTO product(name, description, price, inStock) VALUES(?, ?, ?, ?)";
    console.log(values);

    bd.query(sql, values, (err, data)=>{
        if(err){
            console.log(err);
            return err;
        }
        res.json(req.query);
    });
});



app.listen(PORT, ()=>{
    console.log("Server run || port "+ PORT);
});

