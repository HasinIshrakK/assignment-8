import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'

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
    </>
  )
}

export default App
