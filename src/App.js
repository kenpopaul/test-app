import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

console.log(taskList);

  return (
    <>
    <h1>To Do Board....</h1>
    <Input taskList={taskList} setTaskList={setTaskList}/>
    </>
  );
}

export default App;
