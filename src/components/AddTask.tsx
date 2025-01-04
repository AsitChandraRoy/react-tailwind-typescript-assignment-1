import React, { useState, useEffect } from "react";

interface AddTaskProps {
  addTask: (text: string) => void;
  editTask: { id: number; text: string; completed: boolean } | null;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask, editTask }) => {
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    if (editTask) {
      setInputText(editTask.text);
    }
  }, [editTask]);

  const handleSubmit = () => {
    if (!inputText.trim()) {
      alert("Please enter a valid task!");
      return;
    }
    addTask(inputText.trim());
    setInputText("");
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        className="border rounded-md px-4 py-2 w-2/3"
        placeholder="Add a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="ml-2 px-4 py-2 text-white bg-lime-500 rounded-md hover:bg-lime-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
