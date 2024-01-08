// import React from 'react';

// import { FaAlignJustify } from "react-icons/fa";
// import { BsMicrosoft } from "react-icons/bs";
// import { RiComputerLine } from "react-icons/ri"; // Assuming it's from the 'react-icons/ri' package



// export default function Features() {
//   return (
//     <div>
//       <div className='features'>
//         <p>FEATURES</p>
//       </div>
//       <div className='heading'>
//         <h1>What I Do</h1>
//       </div>
//       <div className="container" >
//         <div className='mai' id='first'>
//           <div className='images'>
//             <FaAlignJustify className='custom-icon' />
//           </div>
//           <div>
//             <h1>Web App <br/>Development</h1>
//           </div>
//           <div>
//             <p>
//               I specialize in creating dynamic and user-friendly web applications that cater to specific business needs. With a focus on modern technologies and responsive design, I deliver customized solutions that enhance user experiences and drive growth for businesses
//            </p>   

//           </div>
//         </div>
       
//        <div>
//        <div className="container">
//         <div className='mai second' >
//           <div className='images'>
//             <BsMicrosoft   className='custom-icon' />
//           </div>
//           <div>
//             <h1>Web App <br/>Development</h1>
//           </div>
//           <div>
//             <p>
//               I specialize in creating dynamic and user-friendly web applications that cater to specific business needs. With a focus on modern technologies and responsive design, I deliver customized solutions that enhance user experiences and drive growth for businesses
//             </p>   
//           </div>
//         </div>
       
       
//       </div>
    
//         </div>   
//      <div>
//      <div className="container">
//         <div className='mai'>
//           <div className='images'>
//             <RiComputerLine className='custom-icon' />
//           </div>

//           <div>
//             <h1>Web App <br/>Development</h1>
//           </div>
//           <div>
//             <p>
//               I specialize in creating dynamic and user-friendly web applications that cater to specific business needs. With a focus on modern technologies and responsive design, I deliver customized solutions that enhance user experiences and drive growth for businesses
//             </p>   
//           </div>
//         </div>
       
       
//       </div>
    

//      </div>
      
//       </div>
      
//     </div>
//   );
// }
import React from 'react'
import './feature.css';
import { FaAlignJustify } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri"; // Assuming it's from the 'react-icons/ri' package


export default function Features() {
  return (
    <div>
      <div class="container">
  <div class="row gx-50 gy-2">
  <div className='features'>
         <p>FEATURES</p>
       </div>
       <div className='heading123'>
         <h1>What I Do</h1>
       </div>
    
    
    <div class="col-12 col-sm-12 col-md-4 col-lg-4 ">
       <div className="parents">
             <div className='images'>
             <FaAlignJustify className='custom-icon' />
           </div>

           
          <div className="childs">
             <h1 >  Web App <br/> Development</h1>
          </div>
          <div>
            <p  className='title'> 
            I specialize in creating dynamic and user-friendly web applications that cater to specific business needs. With a focus on modern technologies and responsive design, I deliver customized solutions that enhance user experiences and drive growth for businesses

            </p>
          </div>
          
        </div>       

    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4 ">
    
        <div className="parents">
             <div className='images'>
             <BsMicrosoft className='custom-icon' />
           </div>

           
          <div className="childs">
             <h1 > Single Page <br/> Application</h1>
          </div>
          <div>
            <p  className='title'> 
            Single Page Application
With expertise in Single Page Application (SPA) development, I craft seamless and interactive web experiences that load quickly and provide a smooth user journey. By leveraging modern frontend frameworks like React or Vue.js, I create dynamic SPAs that enhance performance and deliver a seamless browsing experience.
             <br/>
             <br/>
             
            </p>
          </div>
          
        </div>       

    </div>

    <div class="col-12 col-sm-12 col-md-4 col-lg-4 ">
        <div className="parents">
             <div className='images'>
             <RiComputerLine className='custom-icon' />
           </div>

           
          <div className="childs">
             <h1 > Responsive Web <br/> Design</h1>
          </div> 
          <div>
            <p  className='title'> 
            I specialize in crafting responsive web designs that adapt seamlessly to various devices and screen sizes. With a keen eye for detail and a focus on customization, I create unique and tailored web experiences that align with the brand identity and goals of my clients            </p>
          </div>
          
        </div>       

    </div>

  </div>
</div>
    </div>
  )
}
