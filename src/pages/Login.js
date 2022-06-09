import React from 'react'
import NavigBar from '../components/NavigBar'

import { googleImg, appleImg, facebookImg } from "../resources"

const Login = () => {
  return (
    <div>
      <NavigBar />

      <div className='justify-between pb-[4vh]  font-nunito pt-[4vh] xl:pt-[4vh] xl:text-[2vw] lg:text-[2vw] text-[#1919238A] text-center'>
        Welcome Back ! Let’s get you into your account
      </div>

      <div className='mx-[35vw]'>
        <button className="focus:shadow-lg hover:shadow-lg py-3.5 px-4 border rounded-full border-gray-700 flex justify-center items-center w-full mt-10">
          <img className='pr-10' src={googleImg} alt="google" />
          <p className=" text-2xl font-medium ml-4 text-gray-700">Continue with Google</p>
        </button>

        <button className="focus:shadow-lg hover:shadow-lg py-3.5 px-4 border rounded-full bg-black border-gray-700 flex justify-center items-center w-full mt-10">
          <img className='pr-11' src={appleImg} alt="apple" />
          <p className=" text-2xl font-medium ml-4 text-white">Continue with Apple</p>
        </button>

        <button className="focus:shadow-lg hover:shadow-lg py-3.5 px-4 border rounded-full border-gray-700 bg-[#1877F2] flex justify-center items-center w-full mt-10">
          <img className='pr-10' src={facebookImg} alt="facebook" />
          <p className=" text-2xl font-medium ml-4 text-white ">Continue with Facebook</p>
        </button>

      </div>

    </div>
  )
}

export default Login