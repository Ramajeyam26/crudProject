const mongoose = require("mongoose");

require("../schema/CrudSchema");
const CrudSchema = mongoose.model("crudOperation");

// get user detail by id for profile page
const getUserDetails = async (req, res) => {
  try {
    const id = req.params.id;
    var result = await CrudSchema.findById(id);
    if (result) {
      console.log(result);
      return res.status(200).send({ data: result, message: "successfull" });
    } else {
      console.log(result);
      return res.status(404).send({ data: result, message: "unsuccessfull" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ erMessage: error.message });
  }
};

//get user detail for edit page
const UserDetailToEdit = async (req, res) => {
  try {
    const id = req.params.id;
    var resultTwo = await CrudSchema.findById(id);
    if (resultTwo) {
      console.log(" successfull " + resultTwo);
      return res.status(200).send({ data: resultTwo, message: "successfull" });
    } else {
      console.log("unsuccessfull" + resultTwo);
      return res
        .status(404)
        .send({ data: resultTwo, message: "unsuccessfull" });
    }
  } catch (error) {
    console.log("Error has occured to fetch data");
    return res.status(500).send({ message: error.message });
  }
};

//update user detail in edit page
const UpdateUserDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, email, password, place, mobileNumber } = req.body;
    const result = await CrudSchema.updateOne({
      id: id,
      $set: {
        name: name,
        age: age,
        email: email,
        password: password,
        place: place,
        mobileNumber: mobileNumber,
      },
    });
    if (result) {
      console.log(result);
      res.status(200).send(data);
    } else {
      console.log(result);
      res.status(400).send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//delete user by id
const DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await CrudSchema.deleteOne({ _id: id });
    if (result) {
      console.log(result);
      res.status(200).send(result)
    } else {
      console.log(result);
      res.status(404).send(result)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

const AllUsers = async (req, res) => {
  try {
    const result = await CrudSchema.find();
    if (result) {
      console.log(result);
      return res.status(200).send({ data: result, message: "successfull" });
    } else {
      console.log(result);
      return res.status(404).send({ data: result, message: "unsuccessfull" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ data: error, message: error.message });
  }
}
module.exports = { getUserDetails, UserDetailToEdit,UpdateUserDetail,DeleteUser,AllUsers };
