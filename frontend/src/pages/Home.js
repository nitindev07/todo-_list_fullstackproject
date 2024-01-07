import React, { useState, useEffect } from 'react'
import Main from '../component/Main'

const Home = () => {
const [todo,setToDo]=useState([])

useEffect(() => {
  
      fetch("http://localhost:5001/todo")
    .then(res => {
      if(!res.ok){
        throw Error('this is not available')
      }
      return res.json();
    })
    .then(todo => {
      setToDo(todo);
      
    })
    .catch(err =>{
        console.log(err);
    })
  }, ["http://localhost:5001/todo"])



return (
    <div>
      <Main todos={todo}/>
    </div>
  )
}

export default Home
