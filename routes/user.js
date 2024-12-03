const {
  CreateUser,
  GetUser,
  GetUserById,
  UpdateUserDetails,
  DeleteUserById,
} = require("../controller/UserController");
const express = require("express")
const router = express.Router();


router.post('/create', CreateUser);
router.get('/users', GetUser);
router.get('/user/:gender', GetUserById)
router.put("/user/:id", UpdateUserDetails);
router.delete('/user/:id', DeleteUserById)


module.exports = router;