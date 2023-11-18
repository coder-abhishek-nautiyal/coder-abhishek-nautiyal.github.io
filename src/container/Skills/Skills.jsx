import React from 'react'
import './Skills.scss';
import { AppWrap } from '../../wrapper';

import { SkillsDetails } from '../../constants/data';
import { images } from '../../constants';




const Skills = () => {
  return (
    <>
      <div className='app__skills'>
        <div className='app__skills-wrapper'>
          <div className='app__skills-title'>
            Skills
          </div>
          <div className='app__skills-desc'>
            Here are some of my skills on which I have hands on experience.
          </div>
          <div className='app__skills-container'>
            {SkillsDetails.map((skill, skillIndex) => (

              <div className='app__skills-skill' key={skillIndex}>
                <h2 className='app__skills-skill-title' >{skill.title}</h2>
                <div className='app__skills-skill-list'>
                  {skill.skills.map((item, itemIndex) => (
                    <div className='app__skills-skill-item' key={itemIndex}>
                      <img src={images[item.image]} alt={item.image} />
                      {item.name}

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  Skills,
  'skills',
  'app__whitebg',
);