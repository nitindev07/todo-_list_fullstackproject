import React from "react";

const Main = ({ todos }) => {
  return (
    <div className="w-[900px] mx-auto mt-28 z-40">
      {todos.map((todos, idx) => {
        return (
          <div
            key={idx}
            className="p-5 rounded-xl bg-gray-200 shadow-xl mb-6 z-0"
          >
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-lg capitalize font-bold txtgr">{todos.title}</h1>
                <h3>{todos.description}</h3>
              </div>
              <button onClick={
                ()=>{
                  // const todoId = 
        fetch(`http://localhost:5001/todo/${todos._id}`,{
          method:"DELETE",
        }
        )
        .then(async function(res){
          const json =await res.json
          window.location.href = '/'
        })
      }
              }
               className="border px-4 py-2 rounded-md bg-gray-400 hover:bg-red-400 ">
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
