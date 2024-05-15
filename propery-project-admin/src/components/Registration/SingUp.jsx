import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =  async (event) => {
    event.preventDefault();

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error('Please enter a valid email address');
    }

    // Password validation
    if (password.length < 8 || !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
      return toast.error('Password should be at least 8 characters long and contain at least one uppercase letter, one symbol.');
    }
    navigate("/login")

   
    setFullName('');
    setMobileNo('');
    setEmail('');
    setPassword('');

    toast.success('Registration successful!');

try{
  const response= await  axios.post("http://localhost:4000/api/auth/register",
  {
    fullname:fullName,
    mobile:mobileNo,
    email,password
  }
  );
  console.log("data",response.data);
}catch(error){
  console.error("Error creating Property Details:", error);

}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover opacity">
      <div className="bg-[#390255] p-8 rounded-lg shadow-lg w-[400px] ">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="h-20 mx-auto w-20 mb-4 " />
          <h2 className="text-5xl font-semibold text-white ">Register</h2>
          <p className="text-white mt-6 text-lg">Create an account to get started</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg text-white font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileno" className="block text-lg text-white font-semibold mb-2">Mobile No</label>
            <input
              type="text"
              id="mobileno"
              placeholder="Enter your Mobile Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-white font-semibold mb-2">Email Address</label>
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
            <label htmlFor="password" className="block text-lg text-white font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-[#FFF848] text-2xl font-semibold text-[#390255]  py-2 px-1 rounded-lg hover:bg-white hover:text-[#390255]" >Register</button>
        </form>
        <p className="text-center mt-4 text-sm text-white">
          Already have an account? <span className="text-[#FFF848] text-m hover:underline cursor-pointer" onClick={() => navigate("/login")}>Login here</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
