import React from 'react';
import signupImage from '../../assets/images/signupVectore.png';

const signupLayout = ({children}) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-10 pb-12 ml-20 ">
        <h2 className="text-2xl font-medium text-black" >Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[80vw] h-screen bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <img src={signupImage} alt="Auth" 
        className="w-64 lg:w-[90%] h-[85%] absolute  bottom-13  right-10 " />
      </div>
    </div>
  )
};

export default signupLayout;