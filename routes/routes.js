const express = require('express');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: false })); 


router.get('/', function (req, res) {
  res.render('index')
 })
 
 router.get('/about', function (req, res) {
  res.render('about')
 })
 
 router.get('/admin', function (req, res) {
  res.render('admin')
 })

 




module.exports = router;