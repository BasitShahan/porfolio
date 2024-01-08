import { useState } from 'react';
import './resume.css';
import Education from './Education';
import MySkill from './MySkill';

export default function Resume() {
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const showEducationComponent = () => {
    setShowEducation(true);
    setShowSkills(false); // Hide the skills component
  }

  const showSkillsComponent = () => {
    setShowSkills(true);
    setShowEducation(false); // Hide the education component
  }

  return (
    <>
      <div className='myresume'>
        <div>
          <p style={{ color: 'rgb(255, 1, 79)' }}>MERN STACK DEVELOPER</p>
        </div>
        <div>
          <div>
            <h1 style={{ color: 'rgb(209, 213, 208)' }}>My Resume</h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
              <div className='but'>
                <button onClick={showEducationComponent}>Education</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
              <div className='but'>
                <button onClick={showSkillsComponent}>Professional Skills</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showEducation && <Education />}
      {showSkills && <MySkill />}
    </>
  );
}
