import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CreteMain = () => {
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const navigate = useNavigate('/')
  const goTohome = () => {
    navigate('/some-route'); // Navigates to '/some-route'
  };


    return (
    <div className="w-[1200px] mx-auto mt-28">
    <div className='flex flex-col gap-y-7 w-[350px] mx-auto my-44 justify-center items-center'>

      <input className='border-[1px] w-full border-black  rounded-lg px-5 py-3 text-black ' id='title' onChange={
        (e)=>{
            const value = e.target.value
           setTitle(value)
        }
      } type="text" placeholder='Title' />
      <input className='border-[1px] w-full border-black  rounded-lg px-5 py-3 text-black ' id='desc' onChange={
        (e)=>{
            const value = e.target.value
           setDescription(value)
        }
      } type="text" placeholder='Description'/>
       <button className="border px-10 py-3  rounded-md bg-red-400 hover:bg-green-400 "
       
       onClick={()=>{
        fetch('http://localhost:5001/todo/create',{
          method:"POST",
          body: JSON.stringify({
            title:title,
            description:description
          }),
          headers:{
            "Content-Type":"application/json"
          }
        }
        )
        .then(async function(res){
          const json =await res.json
          window.location.href = '/'
        });goTohome();
      }
       }> Add to todo</button>
    </div>
    </div>
  )
}

export default CreteMain
