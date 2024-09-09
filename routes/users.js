const mongoose =require("mongoose");
mongoose.connect=("mongodb://127.0.0.1:27017/practice");

//schema matlab aapko ye batane waala har document  mein kya hoga
const userschema = mongoose.Schema({
  username:String,
  name:String,
  age:Number
})

mongoose.model()