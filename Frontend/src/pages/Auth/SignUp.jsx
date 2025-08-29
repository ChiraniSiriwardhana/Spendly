import React,{useState}  from 'react'
import AuthLayout from '../../components/layouts/signupLayout';
import Input from '../../components/layouts/Inputs/Input';
import ProfilePhotoSelector from '../../components/layouts/Inputs/ProfilePhotoSelector';
import { validateEmail, validatePassword } from "../../Utils/helper";
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
  const[profilePicture, setProfilePicture] = useState(null);
  const[fullName, setFullName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const[error, setError] = useState(null);
  const navigate = useNavigate();

  //handle signup Form
    const handleSignUp = async (e) => {
        e.preventDefault();

        let profileImageUrl = "";
         
        // Validate full name
        if(!fullName){
            setError("Please enter your full name");
            return;
        }
    
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
        
        // TODO: Add API call for user registration here
        // After successful signup, redirect to login page
        console.log('Signup successful with:', { fullName, email, profileImageUrl });
        navigate('/login');
    }

  return (
    <AuthLayout>
      <div className="lg:w-[90%] h-auto md:h-full  mt-10 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-black mb-2 ">Create Account</h3>
        <p className="text-xs text-slate-700 mt-[1px] mb-6">Join us today by entering your details below</p>
        <div className="mb-5"></div>
        <form onSubmit={handleSignUp}>
            <ProfilePhotoSelector image={profilePicture} setImage={setProfilePicture} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="John Doe"
                type="text"
                />

                <Input 
                value={email}
                onChange={({target}) => setEmail(target.value)}
                label="Email Address"
                placeholder="john@example.com"
                type="email"
                />

                <div className="mb-0.5"></div> 
                <div className="col-span-2">
                    <Input 
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                    label="Password"
                    placeholder="Min 8 characters"
                    type="password"
                />
                </div>
                


            </div> 
            {error && <p className="text-red-500 text-xs pb-2.5-2">{error}</p>}

            <div className="mb-4"></div> 
            <button type="submit" className="btn-primary">
            SIGN UP
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Log In
            </Link>
            </p>
        </form>
      </div>
    
    </AuthLayout>
  )
}

export default SignUp
