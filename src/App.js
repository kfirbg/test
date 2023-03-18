import "./App.css";
import TaskRow from "./TaskRow/TaskRow";
import AddTask from "./AddTask/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [newTask, setNewTask] = useState([]);
  useEffect(() => {
    console.log(newTask);
  }, [newTask]);

  return (
    <div className="App">
      <h1 className="App-title">Todo List</h1>
      <AddTask setNewTask={setNewTask} newTask={newTask}></AddTask>
      {/* {console.log("newTask:" + newTask)} */}
      {newTask.map((newTask, index) => (
        <TaskRow>{newTask}</TaskRow>
      ))}
    </div>
  );
}

export default App;
