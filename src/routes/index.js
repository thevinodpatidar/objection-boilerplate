const express = require("express");
const router  = express.Router();

// import user controller.
const UserController = require("../controllers/index").UserController;
const UserPostsController = require("../controllers/index").UserPostsController;

// API Routes for User

router.post("/user",UserController.AddUser);
router.get("/user/:fullName",UserController.GetUser);
router.get("/users",UserController.GetUsers);
router.put("/user/:id",UserController.UpdateUser);
router.delete("/user/:id",UserController.RemoveUser);

// API Routes for Posts
router.post("/posts",UserPostsController.CreatePost);
router.get("/posts",UserPostsController.GetPosts);
router.get("/posts/:created_by",UserPostsController.GetUserPosts);

// export router;
module.exports = router;