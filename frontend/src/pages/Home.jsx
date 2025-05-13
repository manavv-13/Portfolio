import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../sections/Main'
import Skills from '../sections/Skills'
import Project from '../sections/Project'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar/>
      <div className="">
      <div id="home">
        <Main />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
