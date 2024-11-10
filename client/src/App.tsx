import React, { useState } from 'react'
import Navbar from './components/components/Navbar'
import TodoForm from './components/components/TodoForm'
import TodoList from './components/components/TodoList'
import './App.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);       
      if (darkMode) {
        document.body.classList.add("dark");
      } else {        
        document.body.classList.remove("dark");
      } 
  }

  return (
    <>
      <div>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <TodoForm darkMode={darkMode} />

        <TodoList darkMode={darkMode} />

        <footer style={{padding: '5%'}}></footer>
      </div>      
    </>
  )
}

export default App
