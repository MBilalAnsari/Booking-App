import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'
import Featured from '../../components/Featured/Featured.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  )
}

export default Home
