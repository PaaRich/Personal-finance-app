import { useState } from "react";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const [signUpFormValues, setSignUpFormValues] = useState({
    name: "",
    email: "",
    password:""
  });
 

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpFormValues((prev) => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-5 w-[28rem]">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          const { email, password } = signUpFormValues;
          createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
              toast.success("Sign-up successfully")
              navigate("overview")
              console.log(userCredentials);
            })
          .catch(err=>console.log(err.message))
        }}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={signUpFormValues.name}
              onChange={handleFormData}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={signUpFormValues.email}
              onChange={handleFormData}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-lg font-medium mb-1">Create Password</label>
            <input
              name="password"
              type="password"
              value={signUpFormValues.password}
              onChange={handleFormData}
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
