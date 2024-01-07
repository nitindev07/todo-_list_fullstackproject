const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String,
    required:true,
   }
},{timestamps: true})

const Todos = mongoose.model("todo", toDoSchema)
module.exports = Todos