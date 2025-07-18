import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { people } from "./model/data.js"

const app = express()

 await mongoose.connect("mongodb://localhost:27017/people")   // people database name 

const port = 5000
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', async(req, res) => {
  console.log(req.body)
  try{
    const newEntry = await people.create({
      username: req.body.username,
      Mobileno: req.body.Mobileno,
      Email: req.body.Email,
      Password: req.body.password,
      
    });
    res.send('recieved data and saved to db')
  } catch(err){
    console.error(err)
    res.status(500).send("data not saved")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
