import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import Index from './pages/Index'
import './App.css'
import SMSverify from './pages/SMS_erify'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path='/' element={<Index/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/verify' element={<SMSverify />} />
      
    </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
