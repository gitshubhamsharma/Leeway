var express = require("express");
var router = express.Router();
const Records = require("./recordModel");

/* GET A RECORD */
router.get("/:id", async function(req, res){
    try{
        const record = await Records.findById(req.params.id);
        return res.send(record);
    }catch(err){
        return res.send(err);
    }
});

module.exports = router;