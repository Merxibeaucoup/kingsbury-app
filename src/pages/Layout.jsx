import React from 'react'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Story from '../components/Story'
import { ParallaxProvider } from "react-scroll-parallax";
import Chef from '../components/Chef';

const Layout = () => {
  return (
    <div>
       <ParallaxProvider>
        <Navbar/>
        <Featured/>
        <Story/>
        <Chef/>
        </ParallaxProvider>
        <Footer/>

    </div>
  )
}

export default Layout