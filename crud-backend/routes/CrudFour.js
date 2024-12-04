const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {AllUsers } = require('../controller/getUserData');

require('../schema/CrudSchema');

const CrudSchema = mongoose.model('crudOperation');

router.route('/all-user').get(AllUsers);

module.exports = router;