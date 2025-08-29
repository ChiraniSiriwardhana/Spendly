import React, { useState } from 'react'
import { /*useNavigate,*/ Link } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/layouts/Inputs/Input';
import { validateEmail, validatePassword } from "../../Utils/helper";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  //handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Validate password
    if (!password) {
      setError("Please enter your password");
      return;
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.errors[0]); // Show first error
      return;
    }
    
    setError("");
    
    // Login API call
    console.log('Login successful with:', { email });
  }

  return (
    <AuthLayout>

      <div className="lg:w-[90%] h-3/4 md:h-full flex flex-col justify-center ">
        <h3 className="text-2xl font-semibold text-black mb-2" >Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>
        <div className="mb-10"></div>

        <form onSubmit={handleLogin}>
          <Input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="email"
          />

          <div className="mb-4"></div> 
          
          <Input 
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5-2">{error}</p>}

          <div className="mb-4"></div> 
          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              Sign Up
            </Link>
          </p>

          {/* <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
          >
            Sign In
          </button> */}
        </form>

      </div>
    
    </AuthLayout>
    
  )
}

export default Login
