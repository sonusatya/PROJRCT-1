const express= require("express");
const router = express.Router();

// Posts
// Index 
router.get("/", (req, res) => {
    res.send("Get for posts");

});

// Show 
router.get("/:id", (req, res) => {

    res.send("Get for show post id");

});

// POST 
router.post("/", (req, res) => {
    res.send("POST for posts");

});

// delete 
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");

});

module.exports = router;
