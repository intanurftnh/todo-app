import React from 'react'
import { useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility, todos}) => {
  const dispatch = useDispatch();
  
  return todos.map((todo)=>(
    <div key={todo.id} className='d-flex justify-content-between todo-box border-bottom border-white py-2'>
        <div className='d-flex content'>
            {editFormVisibility===false&&(
              <input className='form-check-input' style={{width: "20px", height: "20px"}} type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <span className='ms-3 fs-6' style={ todo.completed === true ? {textDecoration:'line-through'} : {textDecoration:'none'} }>
                {todo.todo}
            </span>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span className="ms-2" onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                </>
              )}
        </div>
    </div>
    
  ))
}
