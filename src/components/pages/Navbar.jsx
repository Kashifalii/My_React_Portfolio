import React from "react";
import styles from "../pages/navbar.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImHome } from "react-icons/im";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link>
          <ImHome />
        </Link>
        <span>home</span>
      </li>
      <li>
        <Link>
          <BsPersonLinesFill />
        </Link>
        <span>About</span>
      </li>
      <li>
        <Link>
          <FaLaptopCode />
        </Link>
        <span>skills</span>
      </li>
      <li>
        <Link>
          <MdWorkHistory />
        </Link>
        <span>Portfolio</span>
      </li>
      <li>
        <Link>
          <FaPhoneVolume />
        </Link>
        <span>Contact</span>
      </li>
    </ul>
  );
}

export default Navbar;
