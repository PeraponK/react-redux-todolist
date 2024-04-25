
import React, { useState } from 'react'
import { addTodo, deleteTodo, editTodo } from '../../store/Reducer'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './Todolist.css'


function Todolist() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const addTask = () => {
        const newTask = {
            id: uuidv4(),
            task: value,
            completed: false,
            isEditing: false
        }
        // console.log(newTask)
        dispatch(addTodo(newTask))
        setValue("")
    }

    console.log(value)
    return (
        <div>
            <div className='container'>
                <button className='add-button' onClick={addTask}>Add Task</button>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='HERE!' />
            </div>
        </div>
    )
}

export default Todolist