import React from 'react';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 p-5 text-center">
      <h1 className="text-3xl text-violet-500 font-bold mb-5">Task Management Application</h1>
      <h1 className="text-green-500 mb-8">Organize your tasks efficiently and stay productive!</h1>
      <AddTask />
    </div>
  );
};

export default App;
