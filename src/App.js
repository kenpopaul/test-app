import { useState } from "react";
import Board from "./components/board";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

console.log(taskList);

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold">To Do Board....</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div className="grid grid-cols-3">
        {taskList.map((task, index)=>
        <Board 
          key={index}
          task={task}
        />
        )}
    </div>
    </>
  );
}

export default App;
