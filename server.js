
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.json({ extended: false }));

const path = require('path')
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
app.use('/', require('./routes/routes'))








  

app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}`)); 