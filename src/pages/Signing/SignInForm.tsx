import { useState } from "react";
import { Link } from "react-router-dom";


const SignInForm = () => {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: ""
  })

  const handleFormData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInFormData(prev=>({...prev,[name]:value}))
  }


  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-5 w-[28rem]">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form >
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              
              type="email"
              value={signInFormData.email}
              onChange={handleFormData}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-lg font-medium mb-1">Password</label>
            <input
              type="password"
              value={signInFormData.password}
              onChange={handleFormData}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Need to create an account? <Link to="/" className="text-blue-600 font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
