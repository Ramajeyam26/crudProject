const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


require('../schema/CrudSchema');

const CrudSchema = mongoose.model("crudOperation");

router.get('/crud-three-get', async (req, res) => {
     try {
        //  const {email }= req.query;
         const email = req.query.email;
        //  return res.send("mail"+mail);

         const result = await CrudSchema.findOne({email:email});
                //   console.log("hello "+result);
        //  return res.send({ data: result, message: "successfully fetching" });
        if (result) {
            console.log("Fetching successfully"+result);
            return res.status(200).send({ data: result,message:"successfull" });
        } else {
            console.log("Fetching unsuccessfully"+result);
            return res.status(400).send({message:"unsuccessfull"})
        }
        
    } catch (error) {
        console.log("Error has occured in fetching data"+error);
        return res.status(404).send({ message: error.message });
    }
})

module.exports = router;