import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Resume from './Resume'

export default function Home() {
 const date=new Date().getFullYear();
   return (
    <div>
      <HeroSection/>
      <hr style={{color:'rgb(86,91,98)'}} />

      <Features/>
      <hr style={{color:'rgb(86,91,98)'}} />
      <Projects/>
      <hr style={{color:'rgb(86,91,98)',marginTop:'40px'}} />

          <Resume/> 
          <hr style={{color:'rgb(86,91,98)',marginTop:'40px'}} />

        <Contact/> 
        <hr style={{color:'rgb(86,91,98)',marginTop:'10vw',}} />
         
       <Footer/>
       <hr style={{color:'rgb(86,91,98)',marginTop:'40px'}} />
        
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div>
            <p style={{color:'white',marginTop:'-2vw',fontSize:'20px'}}>
            © {date}. All rights reserved by Abdul Basit
            </p>
          </div>
        </div>       
      </div>
  )
}
