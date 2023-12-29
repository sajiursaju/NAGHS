const express = require('express');
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const router = express.Router();


router.get('/about',auth, async(req, res) => {
  res.render('homesetup/about', {layout: 'layout', user:req.session.user});
});



router.post('/aboutupdate',auth, async(req, res) => {
    res.render('homesetup/about', {layout: 'layout',});
  });
router.post('/',auth, async(req, res) => {
    // res.render('login/login', {layout: false});
    
  })
module.exports = router;