var express = require("express");
var router = express.Router();
const Records = require("./recordModel");

/* SET A NEW RECORD */
router.post("/", async function(req, res){
    try{            
        const newRecord = new Records(req.body);
        await newRecord.save();
        return res.send(newRecord._id);
    }catch (err){
        return res.send(err);
    }  
});

module.exports = router;