import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos:[
        {id:uuidv4(),task:"Take a shower",completed:false,isEditing:false},
        {id:uuidv4(),task:"Walk the dog",completed:true,isEditing:false},
        {id:uuidv4(),task:"Daily study",completed:false,isEditing:false},
    ]
};

export const todoSlice = createSlice({
    name:'todoListing',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(current(state))
            return{...state,todos:[...state.todos,action.payload]}
            
        },
        deleteTodo:(state,action)=>{
            const Del = {todos:[...state.todos.filter((item)=>item.id !== action.payload)]}
            return Del
        },
        editTodo:(state,action)=>{
            const Edit = state.todos.map((item)=>{
                if(item.id === action.payload){
                    item.isEditing = !item.isEditing
            }})
        },
        completedTodo:(state,action)=>{
            state.todos.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed
                
            }
            return item
            
        })
        console.log(current(state))
        },
        saveTodo:(state,action)=>{
            const Save = state.todos.map((item)=>{
                console.log("check",action.payload.value)
                if(item.id===action.payload.currentId){
                    item.task=action.payload.value
            }})
        }
    }
})

export const {addTodo,deleteTodo,editTodo,completedTodo,saveTodo} = todoSlice.actions
export default todoSlice.reducer