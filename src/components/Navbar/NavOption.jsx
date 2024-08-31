import React from "react";
import styles from "./Navbar.module.css";

const NavOption = () => {
  return (
    <>
      <nav className={`${styles.navOptionContainer}`}>
        <ul className="flex w-[100%] justify-center flex-wrap border-b-[2px] pb-3">
          <li className={`${styles.icon} flex`}>
            <svg
              className="w-[21px] mr-[-5px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7h3.535Zm9.466 0H13V5a2 2 0 1 1 2.001 2ZM11 5a2 2 0 1 0-2.001 2H11V5Zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.978 4.978 0 0 0 3-1v3H4V9h6.236ZM13 11c.836.628 1.874 1 3 1v-2a2.992 2.992 0 0 1-2.236-1H20v5h-7v-3Zm-8 5v4h6v-4H5Zm8 4v-4h6v4h-6Z"
              ></path>
            </svg>
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
