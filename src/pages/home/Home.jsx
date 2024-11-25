import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'
import Featured from '../../components/Featured/Featured.jsx'
import Propertylist from '../../components/Propertylist/Propertylist.jsx'
import FeaturedProp from '../../components/FeaturedProperties/FeaturedProp.jsx'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by Property type
        </h1>
        <Propertylist />
        <h1 className="homeTitle">
          Homes guests love
        </h1>
        <FeaturedProp/>
      </div>
    </div>
  )
}

export default Home
