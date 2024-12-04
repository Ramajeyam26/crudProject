const express = require("express");
const mongoose = require("mongoose");
const {getUserDetails,UserDetailToEdit } = require('../controller/getUserData');


const router = express.Router();

require("../schema/CrudSchema");
const CrudSchema = mongoose.model("crudOperation");

router.route("/crud-two-get").get( async (req, res) => {
    try {
        const countResult = await CrudSchema.countDocuments();
        console.log(countResult);
  if (countResult) {
    console.log(`Get count detail successfully ${countResult}`);
    return res.status(200).send({ data: countResult });
  } else {
    console.log(`Failed to get count detail`);
    return res.status(404).send({ message: "fetching error" });
  }
    } catch (error) {
        console.log("Erros has occur in fetching document count" + error.message);
        return res.send(error.message);
    }
    // res.send("hello world");
});

router.route('/get/:id').get(UserDetailToEdit);

module.exports = router;