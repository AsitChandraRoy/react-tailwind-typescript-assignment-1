import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export interface Task {
  id: number;
  text: string;
  date: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const today = new Date();
    const date = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;

    if (editTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = { ...updatedTasks[editTaskIndex], text };
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        text,
        date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5 text-center">
      <h1 className="text-3xl text-violet-500 font-bold mb-5">Task Management Application</h1>
      <h1 className="text-green-500 mb-">Organize your tasks efficiently and stay productive!</h1>
      <AddTask addTask={addTask} editTask={editTaskIndex !== null ? tasks[editTaskIndex] : null} />
      <TaskList />
    </div>
  );
};

export default App;
