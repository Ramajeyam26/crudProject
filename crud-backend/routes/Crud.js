const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { getUserDetails ,UpdateUserDetail, DeleteUser,AllUsers} = require('../controller/getUserData');

require("../schema/CrudSchema");

const CrudSchema = mongoose.model("crudOperation");

router.route("/crud-post").post( async (req, res) => {
    try {
        const data = new CrudSchema(req.body);
        const result = await data.save();
        if (result) {
            console.log(data);
            return res.status(200).send({ message: "Successfully data inserted",data:data });
        } else {
            console.log("Unable to insert data" + data)
            return res.status(400).send({ message: "Unable to data inserted" });
        }
    } catch (e) {
        console.log(e.message);
        return res.status(404).send("Error is come "+e.message)
    }
});
router.route("/crud-get").get( async (req, res) => {
    try {
        const email = req.query.email;
        const password = req.query.password;

        const result = await CrudSchema.findOne({ email: email, password: password });
        console.log(`${email} ${password}`);
        if (result) {
            console.log(`Login successfully ${result}`);
            return res.status(200).send({ data: result,message:"successfull" });
        } else {
            console.log("Login unsuccessfully");
            return res.status(400).send({message:"unsuccessfull"})
        }
        
    } catch (error) {
        console.log("Error has occured in fetching data");
        return res.status(404).send({ message: error.message });
    }
})
router.route('/crud/:id').get(getUserDetails).put(UpdateUserDetail).delete(DeleteUser);
router.route('/all/user').get(AllUsers);
router.route('/:id').delete(DeleteUser);

module.exports = router; 
