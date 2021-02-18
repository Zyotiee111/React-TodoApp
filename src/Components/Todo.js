import React from 'react';

export default function Todo({text,item,todo,setTodo,date}) {
   
     const deleteHandler =()=>{
        setTodo(todo.filter((el) =>el.id !== item.id))
     }
    
    const completeHandler=()=>{
        setTodo(todo.map((val)=>{
            if(val.id === item.id){
                return{
                    ...val,completed: !val.completed
                }
            }
            return val;
        }))

    }
   
   
    return (
        <div className="todo">
            <div className="checkbox">
                <button className={`complete-btn ${item.completed ?"completed-btn": ""}`} onClick={completeHandler}>
                    <i className="fas fa-check-circle"></i>
                </button>
            </div>
            <div className="todo-desc">
                <div className={`desc-title ${item.completed ?"completed": ""}`}>
                    {text}
                </div>
                <div className="extra">
                    <div className="timestamp">
                        <i className="fas fa-clock"/> <div>&nbsp;{date}</div>
                    </div>

               
                <div className="edit-dlt">
                    <button className="edit-btn">
                        <i className="fas fa-pen"></i>
                    </button>
                    <button className="trash-btn" onClick={deleteHandler}>
                        <i className="fas fa-trash" ></i>
                    </button>
          
                </div>
                </div>
            </div>

        </div>
    )
}
