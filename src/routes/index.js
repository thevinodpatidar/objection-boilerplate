const express = require("express");
const router  = express.Router();

// import user controller.
const UserController = require("../controllers/index").UserController;

// API Routes for User

router.post("/user",UserController.AddUser);
router.get("/user/:fullName",UserController.GetUser);
router.get("/users",UserController.GetUsers);
router.put("/user/:id",UserController.UpdateUser);
router.delete("/user/:id",UserController.RemoveUser);




// export router;
module.exports = router;