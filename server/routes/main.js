const express = require('express')
const router = express.Router();


//routes
1
router.get('', (req, res) => {
    res.send("hello World");
});



module.exports = router;