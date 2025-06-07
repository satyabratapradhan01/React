import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1)
  // console.log(count + value);
  // console.log(setValue);
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">useState Hook!</h1>
      <p className="text-xl text-gray-800 mb-2">Count: {count}</p>
      
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={() => setCount(count + Number(value))}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
      >
        Increment
      </button>
    </div>
  );
};
