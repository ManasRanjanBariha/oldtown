import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import NavBar from './components/navbarComponents/NavBar'
import './App.css'
import AllRoutes from './components/AllRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<AllRoutes/>
   </>
  )
}

export default App
