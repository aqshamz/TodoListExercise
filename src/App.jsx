import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import taskReducer from "./reducer/task-reducer";

const initialTask = [
  { id: 1, title: "Create Guest Experience mobile check-in", completed: false },
  { id: 2, title: "Document current CI/CD process", completed: false },
  { id: 3, title: "Perform Code Review for final Pillow-Talk release", completed: false },
  { id: 4, title: "Implement new Color Palette from Design Team", completed: false },
  { id: 5, title: "Fix image uploading process for guest check-in", completed: false },
  { id: 6, title: "Provide on-boarding documentation", completed: false },

];

let nextTaskId = 7;

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  function handleAddTask(taskTitle) {
    dispatch({
      type: "added",
      id: nextTaskId++,
      title: taskTitle,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="max-w-lg mx-auto p-6 bg-black border border-gray-200 rounded-lg shadow">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-white">Chores ToDo List</h1>
      </div>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      <hr className="my-4 border-gray-700" />
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-white">Done {completedTasksCount}</h2>
      </div>
      <div className="mb-4">
        <h2 className="text-l font-bold mb-2 text-white">Add ToDo</h2>
        <AddTask onAddTask={handleAddTask} />
      </div>
    </div>
  );
}

export default App;
