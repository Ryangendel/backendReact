require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


app.get('/', function (req, res) {
console.log(process.env.S3_BUCKET)
console.log(process.env.WHOAMI)
  res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log("LISTENING ON PORT "+PORT)
})