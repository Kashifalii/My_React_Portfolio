import React from "react";
import styles from "../pages/navbar.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbUserCog } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <motion.div
        className={`${styles.logoBox} flex flex-col items-center justify-center`}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
      >
        <img src={logo} alt="" className={styles.logo} />
        <h3 className={styles.name}>KASHIF ALI</h3>
      </motion.div>
      <motion.ul
        className={styles.navList}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1.1 }}
      >
        <li>
          <AiOutlineHome className={styles.icon} />
          <Link className={styles.links}>HOME</Link>
        </li>
        <li>
          <HiOutlineUserCircle className={styles.icon} />
          <Link>ABOUT</Link>
        </li>
        <li>
          <TbUserCog className={styles.icon} />
          <Link>SERVICES</Link>
        </li>
        <li>
          <BsPersonWorkspace className={styles.icon} />
          <Link>PORTFOLIO</Link>
        </li>
        <li className={styles.last}>
          <RiCustomerServiceLine className={styles.icon} />
          <Link>CONTACT</Link>
        </li>
      </motion.ul>
    </div>
  );
}

export default Navbar;
