const express = require("express")
const app = express()
const fruits = require("./routes/fruits")
const cors = require("cors")



app.get("/", (req, res) => {
  res.send("Hello fruity!")
})

app.use(cors())
app.use(express.json()) // Middleware to parse JSON request bodies
app.use(`/fruits`, fruits)



module.exports = app
