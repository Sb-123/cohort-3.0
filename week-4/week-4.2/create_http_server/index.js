const express=require('express')

const app= express()

let users={}

let todos=[]
// store the data in the file, foundation for databases
// add user logic.
app.post('/', function(req, res){
  // create a random id for the todo.
  // extract the todo title from the body
  todos.push({
    title, 
    id,
  })
})

app.delete('/', function(req, res){
  // extract the todo id, 
  // remove the todo from here.
})

app.get('/', function(req, res){
  res.json({
    todos.
  })
})