import React from 'react'
import './myskill.css'

export default function MySkill() {
  return (
  <>
    <div className='heading'>
      <h1 style={{color:'rgb(209,213,208)',textAlign:'center'}}>My Coding Skills</h1>
    </div>
    
    <div style={{marginTop:'20px'}} className="container">
      <div  className="row">
       <div className="col-12 col-lg-6 col-md-6 col-xl-6  gx-10">
           {/* progress code starts here  */}

        <div className='maincont css'>
           <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>HTML</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>90%</h5>
            </div>
           </div>
           <div className="progress">
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>
    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>CSS</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>75%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'70%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>

    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>BOOTSRAP 5</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>70%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'70%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>
    

    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>JavaScript</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>77%</h5>
            </div>
           </div>
           <div className="progress"  style={{width:'77%'}}>
     <div className="progress-bar"   role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>

    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>React.Js</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>80%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'80%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>



    


        </div>
           


       </div>

      {/* ends here */}

       <div  className="col-12 col-lg-6 col-md-6 col-xl-6  second">
        <div className='leftrow'>
       <div className='maincont'>
           {/* progress code starts here  */}

           <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>Node.JS</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>65%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'65%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>
    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>Express.Js</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>75%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'75%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>

    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>MongoDB</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>60%</h5>
            </div>
           </div>
           <div className="progress"  style={{width:'60%'}}>
     <div className="progress-bar"   role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>

    <div className='skillset'>
            <div>
             <h5 style={{color:'white',marginLeft:'20px'}}>PostMan</h5>
            </div>
            <div>
              <h5 style={{marginRight:'20px',color:'white'}}>50%</h5>
            </div>
           </div>
           <div className="progress" style={{width:'50%'}}>
     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> 
    </div>



    </div>
           {/* ends here */}
          
        </div>
        
        
       </div>
        
      </div>

    </div>
      </>
  )
}
