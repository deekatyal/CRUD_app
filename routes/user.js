const express = require("express");
const {handleGetAllUsers,
       handleGetUserById, 
       handleUpdateUserById, 
       handleDeleteUserById,
       handleCreateNewUser,} = require("../controllers/user");

const router = express.Router();

router
 .route('/')
 .get(handleGetAllUsers)
 .post(handleCreateNewUser);

router
.route('/:id')
.get(handleGetUserById)
.delete(handleDeleteUserById) 
.patch(handleUpdateUserById)


module.exports = router;