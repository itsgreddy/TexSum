import './App.css';
import Landing from "./pages/Landing/Landing"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Contact from "./pages/Contact/Contact"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/texsum").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <>

      {/* {(typeof data.texsum === 'undefined') ? (
        <p>Loading. Please Wait</p>
      ) : (
        data.texsum.map((texsum, i) => (
          <p key={i}>{texsum}</p>
        ))
      )} */}

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
