import {useState,useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {

  const [value,setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(()=>{
    getLocalTodos()
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todo,status]);



  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodo(todo.filter((val) => val.completed ===true));
      break;

      case 'active':
        setFilteredTodo(todo.filter((val)=>val.completed ===false));
      break;

      default:
        setFilteredTodo(todo)
        break;
      }

  };
   const saveLocalTodos = () =>{
       localStorage.setItem("todo",JSON.stringify(todo));
     }

   
   const getLocalTodos =() =>{
    if(localStorage.getItem("todo") === null ){
      localStorage.setItem("todo",JSON.stringify([]));
    }else{
      let todoLocal =JSON.parse(localStorage.getItem("todo"));
      setTodo(todoLocal);
    }
  };
  
  return (
    <div className="App">   
      <header>
        <h1>Todo List</h1>
      </header>
      
      <Form
        value={value}
        setValue= {setValue}
        todo={todo}
        setTodo= {setTodo}
        setStatus ={setStatus}
      
      />

      <TodoList
        todo ={todo}
        setTodo= {setTodo}
        filteredTodo ={filteredTodo}
        setFilteredTodo ={setFilteredTodo}
      
      />
      
    </div>
  );
}

export default App;
