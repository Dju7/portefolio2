import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-[300px] w-full text-white overflow-hidden flex flex-col justify-center items-center'>
       <div className='w-full h-[60%] flex justify-beetwenn items-center'>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
           <p className='text-blue-900 text-2xl'>Phone number</p>
           <p className='text-white'>06.45.22.42.70</p>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
           <p className='text-blue-900 text-2xl'>Email Adress</p>
           <p className='text-white'>jlien7@gmail.com</p>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
           <p className='text-blue-900 text-2xl'>Social Media</p>
           <div className='flex justify-between items-centerg gap-4'><p>a</p><p>b</p><p>C</p></div>

           
          </div>
       </div>
       <div className='w-full h-fit flex justify-between items-center'>
          <div className='w-1/3 flex justify-center items-center'>
          <p className='text-slate-500' >@2024 all right reserved</p>
          </div>
          <div className='w-1/3 flex justify-center items-center'>
          <div className='flex gap-2 text-slate-500'>
                    <FaGithubSquare />
                    <FaLinkedin />
                    <FaSquareXTwitter />
                  </div>
          </div>
       </div>
      
    </footer>
  )
}

export default Footer
