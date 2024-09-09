const db = require('../db');

const cust = async (req,res)=>{

    try{
    const result = await db.query('select * from customers');
    res.json(result[0]);
    }
    catch(err){
        res.json(err);
    }
    
    ;
}

module.exports = cust;