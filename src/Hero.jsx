import React from 'react'
import App from './App'
import AddtoCart from './Components/CartBox/AddtoCart'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Hero = () => {
  const router = createBrowserRouter([
    {
     path : "/",
      element: <App/>
    },
    {
      path : "/cart",
      element : <AddtoCart/>
    }
  ])


  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Hero
