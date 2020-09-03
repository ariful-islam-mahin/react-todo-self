import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

const TodoItem = (props) => {
    const {name, isActive, id} = props.todo;
    return (
        <div className="list-group-item align-items-center d-flex justify-content-between border-bottom shadow my-1" >
            <span className={isActive ? 'text-success' : 'line-through'} >{name}</span>
            <div className="buttons-group my-2">
                <button
                className="btn btn-sm btn-success mr-2" onClick={() => props.doneTodo(id)}><FontAwesomeIcon icon={faCheck} /> 
                </button>
                <button
                className="btn btn-sm btn-danger" onClick={() => props.removeTodo(id)}><FontAwesomeIcon icon={faTrash} /> 
                </button>
            </div>
        </div>
    );
};

export default TodoItem;