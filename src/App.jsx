import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'



import './App.css'
import './bootstrap.min.css'
import './custom.css'
import './font-awesome.min.css'

import Index from './pages/Index'
import SMSverify from './pages/SMS_erify'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Add from './pages/add'
import Edit from './pages/edit'
import Dashboard from './pages/Dashboard'
import Addprescription from './pages/Addprescription'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path='/' element={<Index/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/add' element={<Add />} />
    <Route path='/edit' element={<Edit />} />
    <Route path='/verify' element={<SMSverify />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/new-prescription' element={<Addprescription />} />
    </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
