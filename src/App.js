import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/home'
import Main from './Components/Main/main'
import Footer from './Components/Footer/Footer'


const App = () =>{
    return (
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App