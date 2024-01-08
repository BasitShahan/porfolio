  import  {useState} from 'react'
  import './contact.css'
  import {ToastContainer,toast} from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';

  export default function Contact() {
    const [state, setstate] = useState({
      name:'',
      phone:'',
      email:'',
      subject:'',
      message:'',
  });
      const  change=(e)=>{
      setstate({...state,[e.target.name]:[e.target.value]})

      }
      const click = (e) => {
        e.preventDefault(); 
        const { name, phone, email, subject, message } = state;
      
        if (name !== "" &&  phone !== "" &&  email !== "" &&  subject !== "" &&  message !== "") {
          toast.success('Form submitted', {
            position: 'top-center',
          });
      
      
          // Clear the input fields by setting the state properties to empty strings
          setstate({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          toast.error('Fill the required fields', {
            position: 'top-right',
          });
        }
      }
      
    return (
      
      <>
      

    <div className='contactparent'>
    <div>
      <p style={{ color: 'rgb(255,1,79)' }}>CONTACT</p>
    </div>
    <div>
      <h1>Contact With Me</h1>
    </div>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-12 col-lg-5 col-md-5 col-xxl-5  ">
        <div className='leftparent'>
          <div className='leftcontact'>
            <div>
              <img className='img-fluid' src="../images/contact.png" alt="" />
            </div>
          </div>

          <div>
            <div className='name'>
              <h1>Abdul Basit</h1>
            </div>
            <div className='field'>
              <h1>Mern Stack Developer</h1>
            </div>
            <div className='leftpara'>
              <p>With a passion for coding and problem-solving, I specialize in the MERN stack. I strive to create efficient and innovative solutions that deliver seamless user experiences.</p>
            </div>
            <div className='leftnumber'>
              <p>+923143527958</p>
            </div>
            <div className='leftnumber'>
              <p>alibasit123789@gmail.com</p>
            </div>
            <div className='leftdown'>
              <h1>FIND ME  IN</h1>
            </div>
            <div className='leftflex'>
              <div>

                <img src="../images/bxl-facebook-square.svg" alt="" />
              </div>

              <div>
                <img src="../images/bxl-github.svg" alt="" />

              </div>
              <div>
                <img src="../images/bxl-linkedin (2).svg" alt="" />

              </div>


            </div>
          </div>

        </div>

      </div>
      <div className="col-12 col-md-7 col-lg-7 col-xxl-7 text-danger">
        <div className="righparent">
          <div className='rightflex container '>
            <div>
              <p >YOUR NAME</p>

              <div>
                
                <input onChange={change} name='name' value={state.name}  type="text" required/>

              </div>

            </div>

            <div>
              <p>PHONE NUMBER</p>
              <div>
                <input onChange={change} name='phone' value={state.phone}  type="text" required/>

              </div>

            </div>
          </div>

          <div className='inputset container'>

            <div>
              <p >EMAIL</p>
            </div>
            <input onChange={change} name='email' value={state.email}  type="email" required/>

          </div>

          <div className='inputsetle container'>

            <div>
              <p >SUBJECT</p>
            </div>
            <input onChange={change} name='subject' value={state.subject}  type="text" required/>

          </div>
          <div className='inputmessage container'>

            <div>
              <p>MESSAGE </p>
            </div>
              <div className="form-floating">
              <textarea name='message' onChange={change} value={state.message} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>

          
          
            
          </div>
          <div className='button1 container'>
            <button type='submit' onClick={click}><span style={{ color: 'rgb(209,213,219)' }}>SEND MESSAGE</span></button>
          </div>

        </div>


      </div>

    </div>
    </div>
    <ToastContainer/>
    
      </>
    )
  }


