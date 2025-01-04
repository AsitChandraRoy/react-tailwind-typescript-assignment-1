import React from "react";

const TaskList: React.FC = () => {
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
          <tr className="border">
            <td className="p-2 text-center">1</td>
            <td className="text-gray-500">
                <p className="p-2">Task 1</p>
            </td>
            <td className="p-2 text-center">4/1</td>
            <td className="p-2 text-center">
              <input
                placeholder="Status"
                type="checkbox"
                className="cursor-pointer"
              />
            </td>
            <td className="p-2 text-center">
              <button
                className="text-white rounded-md bg-green-500 hover:bg-green-600 px-4 py-1"
              >
                Edit
              </button>
            </td>
            <td className="p-2 text-center">
              <button
                className="text-white rounded-md bg-red-500 hover:bg-red-600 px-4 py-1"
              >
                Delete
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  );
};

export default TaskList;
