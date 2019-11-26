const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    return res.status(200).json({prueba:"prueba"});
})
router.get('/home', function(req, res) {
    res.render('home');
  });
  
module.exports = router;