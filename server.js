require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


app.get('/', function (req, res) {
console.log(process.env.S3_BUCKET)
console.log(process.env.WHOAMI)
  res.send('Hello World')
})

app.get("/home", (req, res)=>{
  res.sendFile(path.join(__dirname, './deployme_app', "build", 'index.html'))
})

app.get('/getdata', function (req, res) {
    console.log(process.env.S3_BUCKET)
    console.log(process.env.WHOAMI)
      res.json({name:"Runa", age:4, breed:"pit"})
    })

app.listen(PORT,()=>{
    console.log("LISTENING ON PORT "+PORT)
})