import axios from "axios";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic email validation
    if (!email.trim()) {
      return toast.error("Please enter your email");
    }

    // Basic password validation
    if (!password.trim()) {
      return toast.error("Please enter your password");
    }

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email: email,
        password: password
      });

      console.log("Login response:", response.data);

      // Check if login was successful
      if (response.status === 200) {
        // Redirect user to dashboard upon successful login
        navigate("/dashboard");

        // Clear email and password fields
        setEmail("");
        setPassword("");

        // Display success message
        toast.success("Logged in successfully!");
      } else {
        // If response status is not 200, display error message
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle error response
      console.error("Error creating Property Details:", error);

      // Display error message based on response status
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect email or password.");
      } else {
        toast.error("An error occurred during login.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover opacity">
      <div className="bg-[#390255] p-8 rounded-lg shadow-lg w-[400px] ">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="h-20 mx-auto w-20 mb-4 " />
          <h2 className="text-5xl font-semibold text-white ">Log In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg text-white font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg text-white font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFF848] text-2xl font-semibold text-[#390255]  py-2 px-1 rounded-lg hover:bg-white hover:text-[#390255]"
          >
            Log In
          </button>
        </form>
        
        <p className="text-center mt-4 text-sm text-white">
          Don't have an Account?
          <span
            className="text-[#FFF848] text-m hover:underline cursor-pointer"
            onClick={() => navigate("/")}
          >
            Register
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LogIn;
