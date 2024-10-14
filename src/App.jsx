import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Index from './pages/Index'
import './App.css'

import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path='/' element={<Index/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
      
    </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
