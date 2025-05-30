import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Blogs from './components/Blogs'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    
      <Navbar/>
      <main>
         <div id='home'>
           <Home/>
         </div>

         <div id='about'>
          <About/>
        </div>

        <div id='services'>
          <Services/>
         </div>

         <div id='doctors'>
          <Doctors/>
         </div>

         <div id='blogs'>
           <Blogs/>
         </div>

      </main>
       <Footer/>
      
    </>
  )
};

export default App;
