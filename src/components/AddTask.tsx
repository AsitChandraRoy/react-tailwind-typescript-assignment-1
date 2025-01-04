import React from "react";



const AddTask: React.FC = () => {
  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        className="border rounded-md px-4 py-2 w-2/3"
        placeholder="Add a task..."
        value=""
      />
      <button
        className="ml-2 px-4 py-2 text-white bg-lime-500 rounded-md hover:bg-lime-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
