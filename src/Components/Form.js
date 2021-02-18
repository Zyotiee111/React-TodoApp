import React, {useState,useEffect,useRef} from 'react'

export default function Form({value, setValue, todo, setTodo,setStatus}) {
    const [error, setError] = useState(!1);

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()

    })

  
    const handleSubmit =(e) =>{
      e.preventDefault();
      if(value ===""){
          setError(true)
      }else{
        setError(false)
        const date = new Date()
          setTodo([...todo,{
              id: Math.random() * 1000,
              text: value,
              date: date.toLocaleDateString(),
              completed: false
             }])
      }setValue("");
    }
    
    return (
        <>
            <form>
                <input type="text" 
                 className="todo-input"
                 value = {value}
                 onChange={(e) => setValue(e.target.value)}
                  ref = {inputRef}
                 
                />
                <button 
                 className="todo-button"
                 type="submit"
                 onClick = {handleSubmit} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select className="filter-todo" onChange={(e)=>setStatus(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                    </select>

                </div>
            </form>
            {error &&
             <div className="alert">
                 <strong>Error:</strong> Value can't be empty.
             </div>
             }
        </>
    )
}
