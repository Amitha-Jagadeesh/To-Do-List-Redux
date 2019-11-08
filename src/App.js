import React from 'react';
import AddItem from '../src/reactComponents/addItem/addItem'
import ToDoList from '../src/reactComponents/listToDoItems/displayList'
import './App.css';

function App() {
  return (
    <header>      
      <h1>todos</h1>
      <div className="header">
          <AddItem /> {/* Componnet used to Add todolist items to the list */}
          <ToDoList /> {/* Componnet used to display todolist items in the list */}
      </div>
    </header>
  );
}

export default App;


