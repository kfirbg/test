import "./AddTask.css";
import Option from "../Options/Option";
import Options from "../Options.json";
import Button from "../Button/Button";

const AddTask = ({ newTask, setNewTask, children }) => {
  const arrTask = newTask;
  let task = "";
  const onSetTask = (e) => {
    task = e.target.value;
  };

  const onCreateTask = () => {
    if (task !== "") {
      arrTask.push(task);
      setNewTask(arrTask);
      // console.log(newTask);
    }
  };

  return (
    <div className="AddTask">
      <input
        className="AddTask-input"
        type="text"
        min="1"
        onChange={onSetTask}
      ></input>
      <Button className="App-submit-button" onClick={onCreateTask}>
        Submit
      </Button>
      <Option Options={Options}></Option>
    </div>
  );
};
export default AddTask;
