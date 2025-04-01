// import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthConsumer from "../../context/AuthProvider";


const SignInForm = () => {
  const navigate = useNavigate();
  const auth = AuthConsumer();
  
  const validationSchema = Yup.object({
      // name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[a-zA-Z]/, "Password must contain at least one letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Password is required"),
    });

  
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      (async () => {
        try {
          await auth?.login(email, password);
          toast.success("Login successfully");
          navigate("/overview");
        } catch (error) {
          console.error("Login failed", error);
        }
      })();
    },
  });


  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-5 w-[28rem]">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit}> 
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-lg font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
             value={formik.values.password}
              onChange={formik.handleChange}
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
