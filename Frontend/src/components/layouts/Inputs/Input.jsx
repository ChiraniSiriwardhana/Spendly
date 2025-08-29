import React, { useState } from 'react'
import {FaRegEye , FaRegEyeSlash} from 'react-icons/fa6';

const Input = ({value, onChange, label, placeholder, type}) => {
    const[showPassword, setShowPassword] = useState(false);

  const togglePassword = () => { 
    setShowPassword(!showPassword);
  }; 
  return (
    <div>
        <label className='text-[13px] text-slate-800'>{label}</label>

        <div className="input-box">
            <input 
               type={type === "password" ? (showPassword ? "text" : "password") : type}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               className="w-full bg-transparent outline-none"
            />
            {type === "password" && (
              <>
                {showPassword ? (
                    <FaRegEye
                      size={22}
                      className="cursor-pointer text-primary"
                      onClick={() =>togglePassword()}
                    />
                ) : (
                    <FaRegEyeSlash
                      size={22}
                      className="text-slate-400 cursor-pointer"
                      onClick={togglePassword}
                    />
                )}
              </>
            )}

        </div>
      
    </div>
  )
}

export default Input
