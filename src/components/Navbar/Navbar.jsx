import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import LanguageSelector from "../Language/LanguageSelector";
import { dictionaryList } from "../../languages";
import { Text } from "../../container/Context/Language";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menus = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menus.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>
              <Text tid={`${item}`} />
            </a>
            
          </li>
        ))}
      </ul>
      <div id="web__language-selector">
        <LanguageSelector />
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            class="app__navbar-menu-motion"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div>
              <LanguageSelector />
              <HiX onClick={() => setToggle(false)} />
            </div>

            <ul>
              {menus.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    <Text tid={`${item}`} />
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
