import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue]=useState('');
  const [editValue, setEditValue]=useState('');

  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <div className='input-and-btn d-flex justify-content-center'>
              <input type="text" className='form-control border border-success' placeholder='Add to do' required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} style={{width: "70%"}}/>
              <button type="submit" className='btn btn-success fw-bold ms-2'>Add</button>
          </div>
        </form>
      ):(
        <form className='mx-4 form-group custom-form' onSubmit={editSubmit}>
          <div className='input-and-btn d-flex justify-content-center'>
              <input type="text" className='form-control border border-success' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)} style={{width: "63%"}}/>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="submit" className='btn btn-success fw-bold ms-2'>Update</button>
                <button type="button" className='btn btn-outline-success fw-bold back-btn'
                onClick={cancelUpdate}>Back</button>
              </div>
          </div>
        </form>
      )}
    </>
  )
}
