const express= require("express");
const router = express.Router();
//Index Route
router.get("/", (req, res) => {
    res.send("Get for users");

});

// Show user
router.get("/:id", (req, res) => {
    res.send("Get for show user id");

});

// POST user
router.post("/", (req, res) => {
    res.send("POST for users");

});

// delete user
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");

});

module.exports = router;