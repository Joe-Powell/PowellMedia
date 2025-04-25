const express = require('express');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: false })); 
var cookieParser = require('cookie-parser')
router.use(cookieParser())


router.get('/', function (req, res) {
  res.render('index')
 })
 
 router.get('/about', function (req, res) {
  res.render('about')
 })
 
 router.get('/admin', function (req, res) {
  res.render('admin')
 })

 router.get('/register', function (req, res) {
  res.render('register')
 })

 router.get('/login', function (req, res) {
  res.render('login')
 })

 
// POST REQUESTS
router.post('/register', function (req, res) {
  let message ='';
  console.log(req.body);
 
 })



module.exports = router;