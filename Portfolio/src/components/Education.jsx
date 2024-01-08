import React from 'react'
import './education.css'
export default function Education() {
  return (
    <div>

       
       <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <div className='mainhead'>
                    <h1  className='h11'>Education Quality</h1>
                </div>
                
             <div className='eduparent'>
                 <div className='educhildtitle'>
                   <div>
                     <h1 className='unititle'>B.S.C in Sindh University</h1>
                   </div>
                   <div className='useflex'>
                    <div>
                    <p className='p' style={{color:'rgb(109,114,123)'}}>University of Sindh Jamshoro (2020 - 2024)</p>
                   </div>
                   <div>
                    <p className='p' style={{color:'rgb(109,114,123)'}}> 3rd Year Gpa <span>2.98/4</span></p>
                   </div>
                   </div>
                    <div style={{marginTop:'2vw'}}>
                        <p className='p' style={{fontSize:'16px',textAlign:'center',fontWeight:700,color:'rgb(109,114,123)'}}>The training provided by universities in order to prepare people<br/> to work in various sectors of the economy or areas of<br/> culture.</p>
                    </div>
                </div>
             </div>
             <div className='intermediate'>
               <div className='interflex container'>
                <div>
                  <div>
                    <h1>Intermidate</h1>
                  </div>
                  <div>
                    <p className='para1 t p'>Government Boys Degree College Qasimabad<span style={{color:'white'}}>(2016-2018)</span>
                     </p>
                     
                  </div>
                </div>
                <div>
                  <p className='para2 t'>67.33%</p>
                </div>
               </div>
               <p className='p'  style={{textAlign:'center',color:'rgb(109,114,123)',fontWeight:700,marginTop:'3vw'}}>Higher education is tertiary education leading to award of an<br/> academic degree. Higher education, also called post-secondary<br/> education.</p>
             </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <div >
                <h1  style={{textAlign:'center'}} className='h11'>Job Experience</h1>
            </div>
          
              <div className='jobpar container'>
                <div className='usefle'>                  <div>
                    <h1>Mern Stack Development</h1>
                  </div>
                  <div>
                    <p>Remote</p>
                  </div>
                  </div>
                  <div>
                    <p className='p'  style={{textAlign:'justify',marginTop:'3.8rem',color:'rgb(109,114,123)',fontWeight:500}}>
                    Over the past 6 months, I've immersed myself in the world of MERN Stack Development, and it has been an incredibly rewarding journey. During this time, I've had the opportunity to work remotely on a variety of projects, where I've gained hands-on experience in building full-stack applications that align with client requirements. This practical experience has not only honed my technical skills but also enhanced my ability to meet client expectations effectively.
                    <br/>
                    <br/>
                    <br/>
                    
                    <p className='p1'
                     style={{textAlign:'justify',marginTop:'1rem',color:'rgb(109,114,123)',fontWeight:500}}>  Now, I'm eager to take the next step in my career by applying my skills and knowledge in a professional industry setting. I'm enthusiastic about contributing to a team, collaborating on challenging projects, and making a meaningful impact. My journey in MERN Stack Development has equipped me with the expertise required to tackle real-world problems and deliver high-quality solutions.
                    </p>
                    </p>
                    
                  </div>
               </div>
            </div>
          </div>
       </div>
    </div>
  )
}
