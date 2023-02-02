import { useState } from "react"

const Input = (taskList, setTaskList) => {
    const [input, setInput] = useState("")
    
    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input]);
    }

    return (
        <>
        <form>
            <input 
                className="border rounded px-2"
                type="text"
                placeholder="Add a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={(e) => setInput(e.target.valuie)}>Add</button>
        </form>
        </>
    )
}

export default Input