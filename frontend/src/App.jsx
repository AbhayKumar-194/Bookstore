import React from 'react'
import Home from './home/Home'
import {Route, Routes} from "react-router-dom"
import Signup from './components/Signup'
import Courses from './courses/Courses'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import { Navigate } from 'react-router-dom'
function App() {
  const [authUser,steAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
     <Route path="/signup" element={<Signup/>}/>
   </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
