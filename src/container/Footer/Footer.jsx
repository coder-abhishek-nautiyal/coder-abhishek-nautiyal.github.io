import React from 'react'
import './Footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BioDetails } from '../../constants/data';


const Footer = () => {
  return (
    <>
      <div className="app__footer-container">
        <footer className="app_footer-wrapper">
          <div className="app__footer-socialMediaIcons">
            <a className="app__footer-socialMediaIcon" href={BioDetails.facebook} target="display"><FacebookIcon color="primary" /></a>
            <a className="app__footer-socialMediaIcon" href={BioDetails.linkedin} target="display"><LinkedInIcon color="primary" /></a>
            <a className="app__footer-socialMediaIcon" href={BioDetails.insta} target="display"><InstagramIcon sx={{ color: "#E1306C" }} /></a>
          </div>
          <p className="app__footer-copyright">
            &copy; 2023 Abhishek Nautiyal. All rights reserved.
          </p>
        </footer>

      </div>


    </>
  )
}

export default Footer