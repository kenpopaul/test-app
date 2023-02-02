import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, SetTaskList] = useState([]);
  return (
    <>
    <h1>To Do Board</h1>
    <Input taskList={taskList} SetTaskList={SetTaskList}/>
    </>
  );
}

export default App;
