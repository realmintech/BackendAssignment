const {CreateUser, GetUser} = require("../controller/UserController");
const express = require("express")
const router = express.Router();


router.post('/create', CreateUser);
router.get('/users', GetUser);


module.exports = router;