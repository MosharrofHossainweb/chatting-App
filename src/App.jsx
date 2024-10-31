import React, { createElement } from 'react'
import './Component/Common/Loginrester.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
const App = () => {

  const myroute = createBrowserRouter(createRoutesFromElements(

   <Route>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
   </Route>
  ))

  return (
    <>
    <RouterProvider router ={myroute}/>
    </>
  )
}

export default App