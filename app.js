const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('call...'))

app.get('/state/', (req, res) => {
  const song = req.body.value
  res.json([pattern1, pattern2, pattern3])
  res.end()
})

app.get("/songs", (req, res) =>{
  console.log("Responding to root route")
  res.send("Song!")
})


app.get('/select/:songid', (req,res) => {
  console.log("Song: " + req.body.value)
  res.end()
})

app.post("/playing", (req, res) =>{
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

app.get("/rate/:value", (req, res) => {
  var pattern1 = {name: "fire"}
  const pattern2 = {name: "rainbow"}
  const pattern3 = {name: "lightning"}
  res.json([pattern1, pattern2, pattern3])
  //res.send("Nodemon auto updates when I save this file")
})


app.post"/compliment", (req, res) => {
  var speed = Number
  res.json([speed])
  //res.send("Nodemon auto updates when I save this file")
})


app.listen(3003, () =>{
  console.log("Server is up and listening on 3003...")
})
