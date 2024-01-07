const asyncHandler = require('express-async-handler');
const Todos = require("../model/toDoModel")
const {createToDo, updateToDo} = require('../types');


const post = asyncHandler(async(req,res)=>{
    const {title, description} = req.body
    if(!createToDo.safeParse({title, description})){
        res.status(401).json({
            msg:"you send wrong input"
        })
        return;
    }
    await Todos.create({
        title ,
        description,
        completed: false
    })
    res.json({
        msg:"todo is created"
        
    })
})

const get = asyncHandler(async(req,res)=>{
    const todo = await Todos.find()
    res.json(todo)
})

const put = asyncHandler(async(req,res)=>{
    const todo = await Todos.findById(req.params.id)
    if(!todo){
        res.status(401).json({
            msg:"you send wrong input"
        })
        return;
    }
    const updateTodo = await Todos.findByIdAndDelete(req.params.id)
        res.json(updateTodo)
})

module.exports = { post, put, get }