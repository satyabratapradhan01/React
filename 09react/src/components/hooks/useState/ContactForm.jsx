import { useState } from 'react';

export const ContactForm = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [contacts, setContacts] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContacts((prev) => ({
            ...prev, [name] : value,
        }));
    };

   const handleFormSubmit = (e) => {
    // e.preventDefault();
    // const contactData = {
    //     username,
    //     email,
    //     message
    // };
    
    console.log(contacts);

   };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Form</h1>
                    <p className="text-gray-600">Please fill out the form below</p>
                </div>
                
                <div onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                        <label 
                            htmlFor="username" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Username
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            required 
                            autoComplete="off"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            placeholder="Enter your username"
                            value={contacts.username}
                            // onChange={(e) => setUsername(e.target.value)}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            required 
                            autoComplete="off"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            placeholder="Enter your email"
                            value={contacts.email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="message" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message"
                            required 
                            value={contacts.message}
                            // onChange={(e) => setMessage(e.target.value)}
                            onChange={handleInputChange}
                            autoComplete="off" 
                            rows="6"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                            placeholder="Enter your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleFormSubmit}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        Send Message
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        Need help? Contact us at{' '}
                        <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                            support@example.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;