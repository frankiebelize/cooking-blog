const express = require('express')
const router = express.Router();


//routes
1
router.get('', (req, res) => {

    const locals = {
        title: "Cooking Blog",
        description: "Simple Blog Created with NodeJs, Express and MongoDB."
    }




    res.render('index',{locals});
});



module.exports = router;