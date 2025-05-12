const express = require('express');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: false })); 
var cookieParser = require('cookie-parser')
router.use(cookieParser())

// Multer
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, 'public/uploads')
    if (file.fieldname === "blogUpload") {
      cb(null, 'views/uploads')
  }
  else if (file.fieldname === "thumbNailUpload") {
      cb(null, 'public/uploadthumbnail');
  }
  else if (file.fieldname === "cssUpload") {
      cb(null, 'public/css/uploadedCSS');
  }
  else if (file.fieldname === "ReUploadBlogFile") {
      cb(null, 'views/uploads');
  }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
    //cb(null, uniqueSuffix + '-' + file.originalname)  // NOT USING SERIALIZED 
  }
})

const upload = multer({ storage: storage })


// DB
let mysql = require('mysql');

let db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
   //user: 'userjoe',
  password: process.env.MYSQLPASSWORD,
  database: process.env.DBNAME
});

db.connect((error) => {
  if (error) {
      console.log('error routes.js ',error)
  } else {
      console.log('mysql connected..');
  }
})



//let db = mysql.createConnection({
  //host: '127.0.0.1',
  //user: 'root',
   //user: 'useriva',
  //password: process.env.MYSQLPASSWORD,
  //database: process.env.DBNAME
//});

// db.connect((error) => {
//   if (error) {
//       console.log('error routes.js ',error)
//   } else {
//       console.log('mysql connected..');
//   }
// })


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


router.post('/uploadBlog',upload.fields([{ name: 'blogUpload', maxCount: 1},{name: 'thumbNailUpload', maxCount: 1},{name: 'cssUpload', maxCount: 1}]), function (req, res) {
  // let message ='';
  console.log('posted admin form to back-end')
  console.log(req.files);
  
  const title = req.body.title;
  const blog_url = req.files.blogUpload[0].filename;
  const image_url = req.files.thumbNailUpload[0].filename;
  console.log('title= '+ title + ' image_url= ' + image_url  + ' blog_url= ' + blog_url );

  
 
 })



module.exports = router;