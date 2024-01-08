import React from 'react'
import './hero.css'
import {NavLink} from 'react-router-dom'
import TypeWrite from './TypeWrite'
export default function HeroSection() {
  return (
    <>
<div className="container-fluid">
  <div className="row">
    <div  style={{marginTop:'5rem',}}  className="col-12 col-lg-6 col-md-6">
     {/* first column */}
      <div>
        <h1 style={{color:'white',marginLeft:'1rem',fontSize:'60px'}}>Hi, i'm  <strong style={{color:'rgb(255,1,79)'}}>Abdul Basit</strong></h1>
      </div>
   <div>
    < TypeWrite/>
   </div>
   <p style={{color:'rgb(196,202,198)',fontWeight:'500',fontSize:'20px',marginLeft:'1rem',marginTop:'-17px'}}>
    I am a skilled software engineer with expertise in the MERN stack. With a strong problem-solving mindset, I excel in developing robust and efficient solutions. My effective communication skills further enhance my ability to collaborate and deliver high-quality projects. 
    </p>
    

        <div style={{display:'flex',justifyContent:'space-between'}} className='maincontent'>
          <div>
            <div>
              <h1 style={{color:'rgb(196,202,198)',fontFamily:'Roboto, sans-serif',letterSpacing:'2px',wordSpacing:'5px',fontSize:'15px',margin:'6rem 0px 0px 1.6rem'}}>FIND ME IN</h1>
            </div >

            <div className='maint'>
  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-facebook-square.svg" alt="" />
  
  </div>

  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-github.svg" alt="" />
  
  </div>

  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-linkedin (2).svg" alt="" />
  
  </div>
</div>

          </div>
           <div style={{marginTop:'4rem'}}>
           <div className='bestskillon'>
              <h1  style={{color:'rgb(196,202,198)',fontFamily:'Roboto, sans-serif',letterSpacing:'2px',wordSpacing:'5px',fontSize:'15px',margin:'2rem 0px 0px 1.6rem'}}>BEST SKILL ON</h1>
            </div >

            <div className='maint' id='second'>
  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-facebook-square.svg" alt="" />
  </div>

  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-github.svg" alt="" />
  </div>

  <div style={{ marginTop: '0.7rem' }} className='animated-icon'>
    <NavLink target='blank' to='https://www.linkedin.com/public-profile/settings'>
    <img style={{ position: 'relative', marginTop: '30%', marginLeft: '33%' }} src="../images/bxl-linkedin (2).svg" alt="" />
    </NavLink>
  </div>
</div>
               </div>      
        </div>


      {/*ends here   */}
    </div>
    <div className="col-12 col-lg-6 col-md-6 ">

     {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error nemo, accusamus quaerat illo animi. Adipisci voluptas veritatis cumque tempora, placeat id harum doloremque! Libero ducimus quas modi delectus facere.
   */}
     <img  style={{marginTop:'30px',marginLeft:'40px'}} src="../images/download (2).jpg"   className="image-animation images"  width='500px'  height='400px' alt="" />
    </div>
  
  </div>
</div>
    </>
  )
}
