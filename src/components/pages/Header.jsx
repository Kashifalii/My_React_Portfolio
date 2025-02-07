import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import styles from "../pages/header.module.css";
import img1 from "../assets/images/header-img.webp";
import img2 from "../assets/images/header-img2.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Header() {
  const moveVarients = {
    hidden: {
      opacity: 0,
      x: -200
    },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.textWrap}>
          <motion.h2
            className={styles.hi}
            variants={moveVarients}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.1 }}
          >
            HI THERE,
          </motion.h2>
          <motion.h1
            className={styles.name}
            variants={moveVarients}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3 }}
          >
            <span className="text-white">I'M</span> KASHIF ALI
          </motion.h1>
          <motion.div
            variants={moveVarients}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer & Graphic Designer",
                2000,
                "Frontend Developer & Problem Solver",
                2000,
                "Frontend Developer & Coding Enthusiast",
                2000
              ]}
              speed={40}
              className={styles.typer}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            className={styles.para}
            variants={moveVarients}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.7 }}
          >
            "Hi, I’m Kashif Ali, a Frontend Developer and Graphic Designer
            passionate about creating Modern, Responsive, and Visually
            Captivating Websites. I focus on delivering seamless user
            experiences and bringing creative ideas to life. Let’s work together
            to make something extraordinary!"
          </motion.p>
          <motion.div
            className="socialIcons flex gap-5 items-center"
            variants={moveVarients}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.9 }}
          >
            <Link className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#f4aa4fc9] rounded-md group">
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f4ab4f] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-gray-300" />
              </span>
              <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f4ab4f] rounded group-hover:-ml-4 group-hover:-mb-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-gray-300" />
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#f4ab4f] rounded-md group-hover:translate-x-0" />
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Reach Out
              </span>
            </Link>
            <motion.Link className={styles.icons} whileHover={{ y: -10 }}>
              <FaLinkedinIn className=" text-lg" />
            </motion.Link>
            <motion.Link className={styles.icons} whileHover={{ y: -10 }}>
              <FaFacebookF className=" text-lg" />
            </motion.Link>
            <motion.Link className={styles.icons} whileHover={{ y: -10 }}>
              <FiGithub className=" text-lg" />
            </motion.Link>
          </motion.div>
        </div>
        <div className={styles.imgWrap}>
          <motion.img
            src={img1}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 3.5 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
