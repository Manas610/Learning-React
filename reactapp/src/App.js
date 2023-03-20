import './App.css';
//import TaskItem from './Components/TaskItem';
import TaskItems from './Components/TaskItems';


function App() {
  const items = [

    {
      id: "i1",
      title: "Blockchain Course",
      priority: 9,
      date: new Date(2022, 2, 5),
    },
  
    
    {
      id: "i2",
      title: "Solidity Course",
      priority: 4,
      date: new Date(2021, 3,165),
    },
  
    {
      id: "i3",
      title: "Truffle Course",
      priority: 2,
      date: new Date(2021, 7, 15),
    },
  
    {
      id: "i4",
      title: "Web3 Course",
      priority: 1,
      date: new Date(2021, 8, 1),
    },
  
   ]
  return (
    //write component name starting with capital letter
    <div>
      <h2>React app just for practice</h2>
      {/* <TaskItem></TaskItem> */}
      <TaskItems 
      date = {items[0].date}
      title = {items[0].title}
      priority = {items[0].priority}
      ></TaskItems>

      <TaskItems 
      date = {items[1].date}
      title = {items[1].title}
      priority = {items[1].priority}
      ></TaskItems>

      <TaskItems 
      date = {items[2].date}
      title = {items[2].title}
      priority = {items[2].priority}
      ></TaskItems>

      <TaskItems 
      date = {items[3].date}
      title = {items[3].title}
      priority = {items[3].priority}
      ></TaskItems>
    </div>
  );
}

export default App;
