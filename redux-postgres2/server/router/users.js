const express = require("express")
const router = express.Router()
const usersControler = require("../controllers/users")
const withAuth = require("../middleware/withAuth")


router.get("/users", withAuth, usersControler.getUsersMail);

module.exports = router;
