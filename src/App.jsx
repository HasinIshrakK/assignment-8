import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export const ThemeContext = createContext([])

function App() {

  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeContext value={[theme, setTheme]}>
        <Navbar />
        <Outlet></Outlet>
        <Footer></Footer>
      </ThemeContext>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
