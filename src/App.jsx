import { useState, useEffect } from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';
import FilterToDo from './components/FilterToDo';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  

  const filterTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'complete') {
      return todo.completed;
    } else {
      return true;
    }
  });
  


  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }


    return (
    <div className="container-fluid m-0 p-0">

      <nav className="navbar bg-success bg-gradient font-monospace">
        <div className="container">
          <span className="navbar-brand fs-3 text-light">Todlis</span>
        </div>
      </nav>

      <div className="container-fluid p-5 text-center">
        <p className="fs-1 font-monospace text-success fw-bold">Welcome!</p>
        <p className="fs-3 m-0">How was your day?</p>
        <p className="fs-5">Note down your work today to be more productive</p>
      </div>


      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      
      <div className='container rounded-4 mx-auto p-4 m-4' style={{backgroundColor: "rgb(180, 228, 180)", width: '75%'}}>

      <FilterToDo filter={filter} handleFilterChange={handleFilterChange} />

      <div className='my-2 py-3'>
        <Todos todos={filterTodos} handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      </div>
      
      <div className='d-grid'>
        <button className='btn btn-outline-success btn-sm delete-all'
        onClick={()=>dispatch(deleteAll())}>Delete All</button>
      </div>
      </div>

    </div>
  );
}

export default App;
