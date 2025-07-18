import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Help from './components/Help'
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import Login from './components/Login'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  // const [value, setvalue] = useState(0)
//  useEffect(() => {
//    alert("hello")
//  },[value])

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>

    },
   
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>

    },
    {
      path:"/help",
      element: <><Navbar/><Help/></>

    },
    {
      path:"/aboutus",
      element: <><Navbar/><Aboutus/></>

    },
    {
      path:"/login",
      element: <><Navbar/><Login/></>

    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
  {/* <Navbar/>  */}
      
    <div>
      {/* <button onClick={() => setvalue((value)=>(value)+8)}   style={{ backgroundColor: 'red' }}>
        value is {value}
      </button> */}

    </div>
    </>
  )
}

export default App
