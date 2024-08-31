import React from "react";
import styles from "./Navbar.module.css";

const NavOption = () => {
  return (
    <>
      <nav className={`${styles.navOptionContainer}`}>
        <ul className="flex w-[100%] justify-center flex-wrap border-b-[2px] pb-3">
          <li className={`${styles.icon} flex`}>
            <img
              className="w-[21px] mr-[-5px]"
              src="src\images\gift.svg"
              alt=""
            />
            &nbsp; Gift Mode
          </li>
          <li className={`${styles.icon}`}>Shop Birthday Gifts</li>
          <li className={`${styles.icon}`}>Home Favorites</li>
          <li className={`${styles.icon}`}>Fahsion Finds</li>
          <li className={`${styles.icon}`}>Registry</li>
        </ul>
      </nav>
    </>
  );
};

export default NavOption;
