
import React from 'react';
import './project.css';
import {AiOutlineGlobal } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'


export default function Projects() {
  const data = [
    {
      images: '../images/movix.fa77503671f41015e0ab.png',
      name:'Movie APP',
      title:'Movix a dynamic movie website built with React, Redux, and the TMBD API. Experience seamless browsing of movie data, featuring a user-friendly interface and advanced search functionalities. Explore the world of cinema with Movix and discover your next favorite film.',
      link:'https://movieapp-self.vercel.app/' 
    },
    {
      images: '../images/ecommerce.d1b34339f98b08b089ef.png',
      name:'E-COMMERCE WEBSITE',
      title:'Discover our exquisite e-commerce website for clothing, crafted with a harmonious fusion of HTML, CSS, and JavaScript. Delve into our meticulously designed pages, including an alluring shop, enlightening About Us section, and effortlessly accessible Contact Us page.'
         ,
         link:'https://melodious-macaron-0cadbe.netlify.app/'
      },
    {
      images: '../images/facebook_UI.230136c7ad8e6e4a8055.png',
      name:'FACEBOOK UI',
      title:'Facebook UI clone, meticulously built using React, complete with a flawless login and registration process. Immerse yourself in the convenience of Dark Mode, enhancing the visual allure of your browsing experience. Leveraging the power of Context API, this project showcases exceptional state management.'
       ,
       link:'',
       github:'https://github.com/BasitShahan?tab=repositories'

    },
    {
      images: '../images/Screenshot (36)-fotor-20231008213434.png',
      name:'CRUD APP',
      title:'MERN CRUD app, where all your data management needs are seamlessly addressed. Built with MongoDB, Express.js, React, and Node.js, this app enables you to effortlessly perform Create, Read, Update, and Delete operations. Explore the convenience of managing your data with ease and efficiency, making it an essential tool for your application development journey'
     ,
     link:'https://redux-crud-psi.vercel.app/'
      ,
      github:'https://github.com/BasitShahan?tab=repositories'
       
    },
    {
      images: '../images/Youtube.03b18f573dd02ca90c13.png',
      name:'YOUTUBE UI',
      title:'YouTube UI clone, meticulously designed with HTML, CSS, and media queries. Immerse yourself in a seamless browsing experience as you explore the captivating layout and responsive design. With this YouTube UI clone, you can effortlessly navigate through videos, playlists, and channels. Experience the essence of YouTubes user interface in this remarkable project, now available in my portfolio.'     
        ,
        github:'https://github.com/BasitShahan?tab=repositories'
       
    },
    {
      images: '../images/newsApp2.21df2499affa8eb4b52e.png',
      name:'NEWSAPP',
      title:'NewsApp, a dynamic web application built with Bootstrap and integrated with the News API. Stay informed with the latest news from various sections such as sports, business, technology, and more. With its sleek design and seamless functionality, the NewsApp provides a user-friendly experience for accessing up-to-date information. Explore the realm of news and stay ahead of the curve with this impressive project.'
      ,
      github:'https://github.com/BasitShahan?tab=repositories'
       

    },
    {
      images: '../images/CrudApp.8cd99f5d44326fea789f.png',
     

      name:'Crud App',
      title:'MERN CRUD app, where all your data management needs are seamlessly addressed. Built with MongoDB, Express.js, React, and Node.js, this app enables you to effortlessly perform Create, Read, Update, and Delete operations. Explore the convenience of managing your data with ease and efficiency, making it an essential tool for your application development journey'
      ,
      link:'https://emerald-lizard-kit.cyclic.app/register'
       ,
       github:'https://github.com/BasitShahan?tab=repositories'
       
    },
    {
      images: '../images/watch.9d285a91d32b05a6283a.png',
      name:'WATCH WEBSITE',
      title:'Watch Website, meticulously crafted with HTML, CSS, and Bootstrap. Immerse yourself in a visually stunning and user-friendly interface as you explore the latest timepieces and horological wonders. With its responsive design and seamless navigation, the Watch Website provides an exceptional browsing experience for enthusiasts and collectors alike. Uncover the artistry of watchmaking through this captivating website'
       ,
       link:'https://superb-narwhal-ae9f67.netlify.app/'
         ,
         github:'https://github.com/BasitShahan?tab=repositories'
       
      }
  ];

  return (
    <>
      <div className='project'>
        <div className='mainheading'>
          <p>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        </div>
        <div className='secondheading'>
          <h1>My Projects</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {data.map((value, index) => (
            <div className="col-md-6 col-12 col-lg-6 gy-5  " key={index}>
              <div className='man'>
              <img src={value.images} width='100%' alt="Project" />
                 <div className='caption'>
                   <div>
                     <p style={{ color: 'rgb(255,1,79)'   }}>{value.name}</p> 
                         
                   </div> 

                   <div className='fonticons'>
                     
                    <NavLink to={value.link}>
                   <AiOutlineGlobal  className='icons'/>
                   </NavLink>
                   <NavLink to={value.github}>   
                   <AiFillGithub className='icon2'/>                    
                   </NavLink>
                    </div>
                  </div>  
                    <div>
                      <p style={{ color: 'rgb(196,194,169)',textAlign:'justify'   }}>{value.title}</p>
                    </div>
                 
                </div> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
