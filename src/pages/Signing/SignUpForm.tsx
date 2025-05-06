import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
// import AuthConsumer from "../../context/AuthProvider";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
// const { setUser } = AuthConsumer();
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setLoading(false);
          // setUser(userCredentials.user);
          toast.success("Account created successfully");
            navigate("/login")
          
          // navigate("/login");
          console.log(userCredentials);
        })
        .catch((err) => {
          toast.error(err.message);
          console.log("Error creating account", err.message);
        });
    },
  });

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-5 w-[28rem]">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-lg font-medium mb-1">Create Password</label>
            <input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            {loading ? <BeatLoader color="#fff" size={10} loading={loading} /> : "Create Account"}
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