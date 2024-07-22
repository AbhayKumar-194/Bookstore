import React, { useState } from 'react'
import Cards from './Cards'
import {Link}   from "react-router-dom"
import axios from "axios";
import { useEffect  } from 'react';
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>

  {
    const getBook=async()=>{
      try {
     const res =await  axios.get("http://localhost:3000/book")
     console.log(res.data);
    
     setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])


  return (
    <>
    <div className='`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div className='mt-28 item-center justify-center text-center '>
        <h1 className='text-2xl  md:text-4xl'>we're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum aliquid eveniet officia voluptates, nesciunt ut neque molestiae fugiat nam consequuntur fuga blanditiis ipsum deserunt velit modi eaque impedit soluta!</p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
             {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
             }
        </div>
      </div>
    </div>
    </>
  )
}

export default Course
