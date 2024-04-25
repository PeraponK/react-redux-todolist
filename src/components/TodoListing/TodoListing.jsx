

import Reducer, { completedTodo, deleteTodo, editTodo, saveTodo } from '../../store/Reducer'
import React, { useEffect, useState } from 'react'
import Store from '../../store/Store'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import './TodoListing.css'
function TodoListing() {

    const [value, setValue] = useState("")

    const [currentId, setCurrentId] = useState("")
    const dispatch = useDispatch()

    const completedTask = (id) => {
        dispatch(completedTodo(id))
    }
    const deleteTask = (id) => {
        dispatch(deleteTodo(id))
    }
    const editTask = (id, temp) => {
        setValue(temp)
        dispatch(editTodo(id))
    }

    const saveTask = () => {
        // console.log("try", value)
        // console.log("ty", currentId)
        // console.log("id and value", id, value)
        dispatch(saveTodo({ currentId, value }))
        // console.log(value)
        closeModal()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        saveTask()
        setValue("")
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    function openModal(x) {
        setCurrentId(x)
        setIsOpen(true);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    // const handleChangeId = (x) = {
    //     setCurrentId()
    // }

    const { todos } = useSelector((state) => state.todos)
    return (
        <div className='container-todolisting'>

            {todos.map((item) =>

                <div className='item-row' key={item.id}>
                    <p onClick={() => completedTask(item.id)}>
                        {item.completed
                            ? (<s><>{item.task}</></s>)
                            : (<>{item.task}</>)}
                    </p>
                    <div>

                        <button className='button-delete' onClick={() => deleteTask(item.id)}>Delete</button>
                        <button className='button-edit' onClick={() => openModal(item.id)} >Edit</button>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <div className='title-modal'>
                            <h2 >Edit</h2>
                        </div>
                        <div className='container-modal'>
                            <form onSubmit={handleSubmit}>
                                <input className='input-modal'
                                    type="text"
                                    value={value}
                                    placeholder='editTask...'
                                    onChange={handleChange} />
                                <button className='button-save' type="submit">save</button>
                            </form>
                            <button className='button-close' onClick={closeModal}>close</button>
                        </div>
                    </Modal>
                    {/* <button onClick={() => editTask(item.id, item.task)}>Edit</button> */}
                </div>)}

        </div>


        // <p onClick={() => completedTodo(item.id)}>
        //     todos.completed</p>
        //     ? (<s><li key={item.id}>{item.task}</li></s>)
        //     : (<li key={item.id}>{item.task}</li>)
    )
}




export default TodoListing