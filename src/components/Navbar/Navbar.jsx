import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { FaUserTie } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';

import { NavbarDetails } from '../../constants/data';

import './Navbar.scss';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div><FaUserTie /> </div>
        <div>Portfolio</div>
      </div>
      <ul className="app__navbar-links">
        {NavbarDetails.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FaBars onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {NavbarDetails.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
