const express = require('express');
const { getUser,postUser,putUser,deleteUser } = require('../controllers/user.controller');

const router = express.Router();

router.get("/users",getUser);
router.post("/users",postUser);
router.put("/users/:id",putUser);
router.delete("/users/:id",deleteUser);

module.exports = router;
