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

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever `tasks` state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const today = new Date();
    const date = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
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

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (index: number) => {
    setEditTaskIndex(index);
  };

  const toggleTaskStatus = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto mt-10 p-5 text-center">
      <h1 className="text-3xl text-violet-500 font-bold mb-5">
        Task Management Application
      </h1>
      <p className="text-green-500 mb-8">
        Organize your tasks efficiently and stay productive!
      </p>
      <AddTask
        addTask={addTask}
        editTask={editTaskIndex !== null ? tasks[editTaskIndex] : null}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleStatus={toggleTaskStatus}
      />
    </div>
  );
};

export default App;
