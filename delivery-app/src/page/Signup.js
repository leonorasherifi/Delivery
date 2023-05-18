import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";



function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image : ""
      });

      console.log(data);
    const handleShowPassword = ()=>{
        setShowPassword(preve => !preve)
};
const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  }
  return (

    <div className="p-9 md:p-20">
      <div className="w-full max-w-sm bg-white m-auto flex justify-center flex-col p-4" >
      <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
      <img src={loginSignupImage} className='w-full h-full' />
   
    </div>
    <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
<label htmlFor='firstName'>First Name </label>
<input type={"text"} id='firstName' name='firstName' className='w-full bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300'
 value={data.firstName}  onChange={handleOnChange}></input>

<label htmlFor='lastName'>Last Name</label>
<input  type={"text"} id='lastName' name='lastName' className=' w-full bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300'
  value={data.lastName}  onChange={handleOnChange}></input>

<label htmlFor='email'>Email</label>
<input type={"email"} id="email" name="email" className=" w-full bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300 "
  value={data.email} onChange={handleOnChange}></input>
  
<label htmlFor='password'>Password</label>
<div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">

<input type={showPassword ? "text" : "password"} id="password" name="password" className='w-full bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300'
  valu
  e={data.password}  onChange={handleOnChange}></input>
<span className="flex text-xl cursor-pointer" onClick={handleShowPassword} >
  {showPassword ? <BiShow /> : <BiHide />}  </span>
          </div>

          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input type={showConfirmPassword ? "text" : "password"} id="confirmpassword" name="confirmPassword" className=" w-full bg-slate-200 border-none outline-none "
            value={data.confirmPassword} onChange={handleOnChange}></input>
     <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword} >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          
          <button className='w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
    </form>
    <p className='text-left text-sm mt-2'>  Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">Login </Link> </p>
    </div>
    </div>
  )
  }

export default Signup