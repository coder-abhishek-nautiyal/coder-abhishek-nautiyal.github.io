import React from 'react'
import './ExperienceCard.scss';

import { images } from '../../../constants';


const ExperienceCard = ({ experience }) => {
  return (
    <>
      <div className="app__experienceCard-card" key={experience.id}>
        <div className="app__experienceCard-top">
          <img src={images[experience.img]} alt={experience.img}/>
          <div className="app__experienceCard-body">
            <div className="app__experienceCard-role">
              {experience.role}
            </div>
            <div className="app__experienceCard-company">
              {experience.company}
            </div>
            <div className="app__experienceCard-date">
              {experience.date}
            </div>
          </div>
        </div>
        <div className="app__experienceCard-description">
          {experience?.desc &&
            <span>{experience?.desc}</span>
          }
          {experience?.skills &&
            <>
              <br />
              <div className="app__experienceCard-skills">
                <b>Skills:</b>
                <div className="app__experienceCard-itemWrapper">
                  {experience?.skills?.map((skill, index) => (
                    <div className="app__experience-skill" key={index}>
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            </>
          }
        </div>
      </div>

    </>
  )
}

export default ExperienceCard