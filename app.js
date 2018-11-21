const express = require('express')
const app = express()
const morgan = require('morgan')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('light'))

app.post('/color_create', (req, res) => {
  console.log("Trying to create a new color...")
  console.log("How do we get the form data??")
  console.log("RED: " + req.body.create_red)
  console.log("GREEN: " + req.body.create_green)
  console.log("BLUE: " + req.body.create_blue)

  const red = req.body.create_red
  const green = req.body.create_green
  const blue = req.body.create_blue


  res.end()
})

app.get('/user/:id', (req,res) => {
  console.log("Fetching user with id: " + req.params.id)
  res.end()
})

app.get("/", (req, res) =>{
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

app.get("/pattern", (req, res) => {
  var pattern1 = {name: "fire"}
  const pattern2 = {name: "rainbow"}
  const pattern3 = {name: "lightning"}
  res.json([pattern1, pattern2, pattern3])
  //res.send("Nodemon auto updates when I save this file")
})

app.get("/color", (req, res) => {

  var color1 = {r: 'req.create_red', g: "25", b:"100"}
  res.json([color1])
  //res.send("Nodemon auto updates when I save this file")
})

app.get("/speed", (req, res) => {
  var speed = Number
  res.json([speed])
  //res.send("Nodemon auto updates when I save this file")
})


app.listen(3003, () =>{
  console.log("Server is up and listening on 3003...")
})
