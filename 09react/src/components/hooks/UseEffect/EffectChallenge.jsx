import { useEffect, useState } from "react"

export const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Count : ${count}`
    }, [count])

    useEffect(() => {
        console.log(name)
    }, [name]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">useEffect Challenge</h1>
            
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
                <p className="text-lg font-medium mb-4">Count: <span className="text-blue-500">{count}</span></p>
                <button 
                    onClick={() => setCount(count + 1)} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition mb-6"
                >
                    Increment
                </button>

                <div className="mb-2 text-left">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                    />
                </div>

                <p className="mt-4 text-gray-700">Current Name: <span className="font-semibold text-blue-500">{name}</span></p>
            </div>
        </div>
    );
}
