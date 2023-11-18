import React from 'react';
import { BioDetails } from '../../constants/data';
import Typewriter from 'typewriter-effect';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


import './About.scss';


const About = () => {
  return (
    <>
      <div id="about" className="app__about">
        <div className='app_about-container'>

          <div className="app__about-left">
            <div className='app__about-title'>
              Hi, I am <br /> {BioDetails.name}
            </div>
            <div className='app__about-textloop'>
              I am a <span>
                <Typewriter
                  options={{
                    strings: BioDetails.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className='app__about-subtitle'>{BioDetails.description}</div>
            <a href={images[BioDetails.resume]} target='display'>Check Resume</a>


          </div>
          <div className="app__about-right">
            <img src={images.profile} alt="profile_bg" />
          </div>
        </div>
      </div>

    </>
  )
}

//export default About
export default AppWrap(
  About,
  'about',
  'app__primarybg',
);