import "./TaskRow.css";
import Button from "../Button/Button";

const TaskRow = ({ value, children }) => {
  return (
    <div className="taskRow-container">
      <div className="taskRow-container-text">{children}</div>
      <div className="taskRow-container-buttons">
        <Button className="taskRow-container-button button-beenDone">V</Button>
        <Button className="taskRow-container-button button-delete">X</Button>
      </div>
    </div>
  );
};

export default TaskRow;
