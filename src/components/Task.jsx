import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from "react";

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.title}
          onChange={(e) => onChange({ ...task, title: e.target.value })}
          className="border rounded p-2 bg-black text-white"
        />
        <button onClick={() => setIsEditing(false)} className="ml-2 p-1 border rounded">
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEditing(true)} className="ml-2 p-1 border rounded">
          Edit
        </button>
      </>
    );
  }
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onChange({ ...task, completed: e.target.checked })}
        className="mr-2"
      />
      <span className="flex-1">{taskContent}</span>
      <button onClick={() => onDelete(task.id)} className="p-1 border rounded border-red-300 hover:bg-red-900">
        <FontAwesomeIcon icon={faTrashCan} color="red" />
      </button>
    </label>
  );
}

export default Task;
