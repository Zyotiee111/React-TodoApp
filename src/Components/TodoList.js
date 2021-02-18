import React,{useState,useEffect} from 'react';
import Todo from './Todo';

export default function TodoList({todo,setTodo,filteredTodo, setFilteredTodo}) {
    const [isTasksEmpty, setTasksStatus] = useState(true)

    useEffect(() => {
        if (todo.length !== 0) {
            setTasksStatus(false)
        } else {
            setTasksStatus(true)
        }
    })
 

    return (
        <>
        <div className="todo-container">
            <ul className="todo-list">
           {isTasksEmpty ?
                <div className="empty-alert">
                    No task has been added yet !
                </div> :
                
                filteredTodo.map((item,index) =>(
                    <Todo 
                    key ={item.id}
                    index= {item.id}
                    text={item.text}
                    date={item.date}
                    todo={todo}
                    setTodo={setTodo}
                    item={item}
                  
                    />
                ))
            }
            </ul>
        </div>
      
        </>
        
    )
}
