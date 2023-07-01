import React from 'react';
import './app.css'
import { useState } from 'react';
import TodoLists from './TodoLists';



function App() {

  const [itemInput , setItemInput] = useState(" ");
  const [items , setItems] =useState([]);

  const itemEvent = (e) => {
    setItemInput(e.target.value);
  }

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems,itemInput]
    });
    setItemInput("")
  }

  const deleteItems =(id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElement,index) => {
        return index !== id;
      })
    })
  }

  return(
    <>
      <div className="main-div">
        <div className="center-div" >
          <br />
          <h1>To-Do List</h1>
          <br />
          <input type="text" placeholder="Add Items" value={itemInput} onChange={itemEvent}/>
          <button onClick={addItem}>+</button>

          <ol>
            {items.map((itemVal,index) => {
              return <TodoLists key={index} id={index} text={itemVal} onSelect={deleteItems} />
            } )}
          </ol>
        </div>
      </div>
    </>
  )
   
}

export default App;
