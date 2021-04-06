import React from 'react'

const ToDoLists = (props) =>{
   


    return (
    <>
    <div className="todo__style">
        <i className="fa-times" aria-hidden="true" onClick={()=>{ props.onSelect(props.id)}}><b> x </b></i>
    <li>{props.text}</li>
    </div>
    </>
    )
}

export default ToDoLists
