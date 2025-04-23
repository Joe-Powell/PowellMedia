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

 router.get('/signup', function (req, res) {
  res.render('register')
 })

 router.get('/login', function (req, res) {
  res.render('login')
 })

 




module.exports = router;