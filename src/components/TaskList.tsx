import React from "react";
import { Task } from "../App";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (index: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit, onToggleStatus }) => {
  return (
    <table className="mx-auto mt-7 border w-3/4">
      <thead>
        <tr className="border bg-gray-100">
          <th className="p-2">Num</th>
          <th className="p-2">Task</th>
          <th className="p-2">Date</th>
          <th className="p-2">Status</th>
          <th className="p-2">Edit</th>
          <th className="p-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id} className="border">
            <td className="p-2 text-center">{index + 1}</td>
            <td className={`p-2 ${task.completed ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </td>
            <td className="p-2 text-center">{task.date}</td>
            <td className="p-2 text-center">
              <input
                placeholder="Status"
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleStatus(task.id)}
                className="cursor-pointer"
              />
            </td>
            <td className="p-2 text-center">
              <button
                className="text-white rounded-md bg-green-500 hover:bg-green-600 px-4 py-1"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
            </td>
            <td className="p-2 text-center">
              <button
                className="text-white rounded-md bg-red-500 hover:bg-red-600 px-4 py-1"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
