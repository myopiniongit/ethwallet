var express = require('express');
var router = express.Router();

router.get('/create', function(req, res){
    res.send("111");
});


router.post('/create_process', function(req, res){
    res.send("111"); 
});


router.get('/deposit', function(req, res){
    res.send("222");
});

router.post('/deposit_process', function(req, res){
    res.send("11221");
});


router.get('/send', function(req, res){
    res.send("3333");
});

router.post('/send_process', function(req, res){
    res.send("44444");
});

module.exports = router;    