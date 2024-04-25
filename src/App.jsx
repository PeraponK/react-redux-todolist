import Header from "./components/Header/Header"
import './App.css'
import Todolist from "./components/Todolist/Todolist"
import { Route, Router, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./store/Store"
import TodoListing from "./components/TodoListing/TodoListing"



function App() {

  return (
    <div>
      <Provider store={Store}>
        <Header />
        <div className="container-list-listing">
          <Todolist />
          <TodoListing />
        </div>
      </Provider>
    </div>
  )
}

export default App
