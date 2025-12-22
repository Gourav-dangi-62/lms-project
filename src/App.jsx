
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import HomePage from './Pages/HomePage.jsx'
import './App.css'
import HomeLayout from './Layouts/HomeLayout.jsx'

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} ></Route>
      </Routes>

    </>
  )
}

export default App
