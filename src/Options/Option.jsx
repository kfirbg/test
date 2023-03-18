import "./Option.css";

const Option = ({ Options }) => {
  return (
    <select className="AddTask-select">
      {Options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
export default Option;
