import mongoose from "mongoose";
const peopleSchema = new mongoose.Schema({
     username: String,
     Mobileno:  Number,
     Email: String,
     Password:  String,
    
 
})
export const people = mongoose.model('people', peopleSchema,'peopledata');