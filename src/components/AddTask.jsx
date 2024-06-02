import { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddClick = () => {
    if (task.trim()) {
      onAddTask(task); 
      setTask(""); 
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Add Task Here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded p-2 bg-black text-white"
      />
      <button onClick={handleAddClick} className="p-1 bg-blue-300 hover:bg-blue-900 text-black rounded-sm self-start">
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
