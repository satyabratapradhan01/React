import { useState } from "react";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Sign Up</h1>
          <p className="text-gray-600 text-sm">
            Please fill in this form to create an account.
          </p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 mb-4">
              By creating an account you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                Terms of Service
              </a>
            </p>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};