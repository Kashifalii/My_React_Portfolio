import React from "react";
import styles from "../pages/navbar.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbUserCog } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div
        className={`${styles.logoBox} flex flex-col items-center justify-center`}
      >
        <img src={logo} alt="" className={styles.logo} />
        <h3 className={styles.name}>KASHIF ALI</h3>
      </div>
      <ul className={styles.navList}>
        <li>
          <AiOutlineHome className={styles.icon} />
          <Link>HOME</Link>
        </li>
        <li>
          <HiOutlineUserCircle className={styles.icon} />
          <Link>HOME</Link>
        </li>
        <li>
          <TbUserCog className={styles.icon} />
          <Link>HOME</Link>
        </li>
        <li>
          <BsPersonWorkspace className={styles.icon} />
          <Link>HOME</Link>
        </li>
        <li>
          <RiCustomerServiceLine className={styles.icon} />
          <Link>HOME</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
