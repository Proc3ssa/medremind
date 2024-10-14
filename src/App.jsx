import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Index from './pages/Index'
import './App.css'

import Login from './pages/Login'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path='/' element={<Index/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/signin' element={<Signup />} />
      
    </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
