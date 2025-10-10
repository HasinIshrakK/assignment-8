import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export const ThemeContext = createContext([])

function App() {

  const [theme, setTheme] = useState(true);
  let navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <ThemeContext value={[theme, setTheme]}>
        <Navbar />
        {
          isLoading && <div className={`${theme === true && 'bg-[#F1F5E8]'} p-6 sm:p-20 flex justify-center`}>
            <span className="loading loading-spinner text-info"></span>
          </div>
        }
        <Outlet></Outlet>
        <Footer></Footer>
      </ThemeContext>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
