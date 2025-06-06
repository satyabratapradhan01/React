import { useState } from "react";

export const ShortCircuit = () => {
    const [isLoggIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("")
    return (
        <section className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-2xl mt-10">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
                Welcome to the ShortCircuit Evaluation!
            </h1>
            {isLoggIn && <p className="text-center text-gray-700 mb-6">You are logged in!</p>}
            <p className="text-center text-gray-700 mb-6"> {user ? `Hello ${user}` : "You are logged in!"} </p>
            <div className="flex justify-center gap-4">
                <button onClick = {() => setIsLoggedIn(!isLoggIn)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Toggle Login State
                </button>
                <button onClick={() => setUser(" Satya...")} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Set User
                </button>
                <button onClick={() => setUser("")} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Clear User
                </button>
            </div>
        </section>
    );
};
