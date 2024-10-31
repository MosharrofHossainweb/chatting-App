import React, { createElement } from 'react'
import './Component/Common/Loginrester.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Component/Register/Register'
const App = () => {

  const myroute = createBrowserRouter(createRoutesFromElements(

   <Route>
      <Route path='/' element={<Register/>}/>
   </Route>
  ))

  return (
    <>
    <RouterProvider router ={myroute}/>
    </>
  )
}

export default App