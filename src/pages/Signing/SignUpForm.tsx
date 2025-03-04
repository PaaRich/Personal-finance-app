import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-5 w-[28rem]">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-lg font-medium mb-1">Create Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <p className="text-sm text-gray-500 mt-1">Passwords must be at least 8 characters</p>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="login" className="text-blue-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
