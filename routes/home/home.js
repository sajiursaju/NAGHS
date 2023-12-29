const express = require('express'); 

const router = express.Router();


router.get('', async(req, res) => {
  res.render('home/home', {layout: false});
})

router.get('/blockchain', async(req, res) => {
  res.render('homesetup/project/blockchain', {layout:false});
})
router.get('/AI', async(req, res) => {
  res.render('homesetup/project/ai', {layout: false});
})
router.get('/iot', async(req, res) => {
  res.render('homesetup/project/iot', {layout: false});
})
router.get('/data', async(req, res) => {
  res.render('homesetup/research/data', {layout:false});
})
router.get('/blockin', async(req, res) => {
  res.render('homesetup/research/blockin', {layout: false});
})
router.get('/health', async(req, res) => {
  res.render('homesetup/research/health', {layout: false});
})

module.exports = router;