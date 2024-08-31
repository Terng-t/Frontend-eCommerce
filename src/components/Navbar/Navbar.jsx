import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  useEffect(() => {
    if (isLoginOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isLoginOpen]);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLogin();
      setIsCategoriesOpen(false);
    }
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  return (
    <>
      <header className={`${styles.navbarContainer} mb-3`}>
      <div className={`${styles.logoContainer}`}>
      <Link to="/">
          <h1 className="text-orange-600 mr-0">Etsy</h1>
        </Link>
      </div>
        <div
          className={`${styles.categories} flex`}
          onClick={toggleCategories}
        >
          <img className="w-[20px]" src="src\images\menu.svg" />
          <p className="hover:cursor-pointer">Categories</p>
        </div>
        <div className={styles.search_box}>
          <form className={styles.row}>
            <input
              className={`${styles.searchBarNavbar}`}
              type="text"
              placeholder="Search for anything"
            />
            <button className={`${styles.searchNavbar_btn}`}>
              <img src="src\images\search.svg" />{" "}
            </button>
          </form>
        </div>
        <ul
          className={`${styles.iconContainer} flex items-center space-x-4 text-gray-800`}
        >
          <li className={`${styles.icon}`} onClick={openLogin}>
            Sign in
          </li>
          <li className={styles.iconBlue}>
            <img src="src\images\heart.svg" alt="" />
            <span className={styles.tooltip}>Favorite</span>
          </li>
          <li className={styles.iconBlue}>
            <img src="src\images\gift.svg" alt="" />
            <span className={styles.tooltip}>Gift Mode</span>
          </li>
          <Link to="/cart">
            <li className={styles.iconBlue}>
              <img src="src\images\cart.svg" alt="cart" />
            </li>
          </Link>
        </ul>
      </header>
      {isCategoriesOpen && (
        <>
          <div
            className={styles.contentOverlay}
            onClick={handleOverlayClick}
          ></div>
          <div className={`${styles.categoriesDropdown}`}>
            <div className={styles.arrow}></div>
            <ul className={styles.dropdownContent}>
              <li>Accessories</li>
              <li>Art & Collecibles</li>
              <li>Baby</li>
              <li>Bags & Purses</li>
              <li>Bath & Beauty</li>
              <li>Books, Movies & Music</li>
              <li>Clothing</li>
              <li>Craft Supplies & Tools</li>
              <li>Electronics & Accessories</li>
              <li>Gifts</li>
              <li>Home & Living</li>
              <li>Jewelry</li>
              <li>Paper & Party Supplies</li>
              <li>Pet Supplies</li>
              <li>Shoes</li>
              <li>Toys & Games</li>
              <li>Weddings</li>
            </ul>
          </div>
        </>
      )}

      {isLoginOpen && (
        <>
          <div
            className={`${styles.overlay}`}
            onClick={handleOverlayClick}
          ></div>
          <div className={`${styles.signInPopupContainer}`}>
            <div className={`${styles.loginContainer} flex flex-col`}>
              <div className="flex place-content-between items-center mb-[10px]">
                <h2 className="text-[18px] font-bold">Sign in</h2>
                <button className={`${styles.register_btn}`}>Register</button>
              </div>
              <form className="flex flex-col">
                <label className="text-[15px]">Email address</label>
                <input
                  className="border-2 border-gray-300 p-[10px] mb-[20px] rounded-xl"
                  type="email"
                />
                <label className="text-[15px]">Password</label>
                <input
                  className="border-2 border-gray-300 mb-[15px] p-[10px] rounded-xl"
                  type="password"
                />
                <div className="flex place-content-between">
                  <label
                    className={`${styles.staySignInCheckBoxContainer} mb-[20px]`}
                  >
                    <input type="checkbox" />
                    <div></div>
                    <span>Stay signed in</span>
                  </label>
                  <span className="text-[14px] text-gray-500 underline underline-offset-1 hover:cursor-pointer mb-[20px] mt-[5px]">
                    Forgot your password?
                  </span>
                </div>
                <button
                  className={`${styles.signIn_btn} items-center py-[13px] mx-[50px] rounded-full text-white bg-black`}
                >
                  Sign in
                </button>
                <p className="text-center text-[14px] text-gray-500 underline underline-offset-1 hover:cursor-pointer mx-[98px] my-[15px]">
                  Trouble signing in?
                </p>
              </form>
            </div>

            <div
              className={`${styles.socialLoginContainer} flex flex-col justify-center items-center mt-[15px]`}
            >
              <div className="flex items-center justify-center w-[100%] h-[1px] my-[28px] bg-gray-400">
                <p className="p-[5px] bg-white text-gray-400 text-[12px]">OR</p>
              </div>
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M15.68,8.18181818 C15.68,7.61454546 15.6290909,7.06909091 15.5345454,6.54545454 L8,6.54545454 L8,9.64 L12.3054546,9.64 C12.12,10.64 11.5563636,11.4872727 10.7090909,12.0545454 L10.7090909,14.0618182 L13.2945454,14.0618182 C14.8072727,12.6690909 15.68,10.6181818 15.68,8.18181818 L15.68,8.18181818 Z"
                      id="Shape"
                      fill="#4285F4"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="M8,16 C10.16,16 11.9709091,15.2836364 13.2945454,14.0618182 L10.7090909,12.0545454 C9.99272729,12.5345454 9.07636364,12.8181818 8,12.8181818 C5.91636364,12.8181818 4.15272727,11.4109091 3.52363636,9.52 L0.850909091,9.52 L0.850909091,11.5927273 C2.16727273,14.2072727 4.87272727,16 8,16 L8,16 Z"
                      id="Shape"
                      fill="#34A853"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="M3.52363636,9.52 C3.36363636,9.04 3.27272727,8.52727273 3.27272727,8 C3.27272727,7.47272727 3.36363636,6.96 3.52363636,6.48 L3.52363636,4.40727273 L0.850909091,4.40727273 C0.309090909,5.48727273 0,6.70909091 0,8 C0,9.29090907 0.309090909,10.5127273 0.850909091,11.5927273 L3.52363636,9.52 L3.52363636,9.52 Z"
                      id="Shape"
                      fill="#FBBC05"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="M8,3.18181818 C9.17454542,3.18181818 10.2290909,3.58545454 11.0581818,4.37818182 L13.3527273,2.08363636 C11.9672727,0.792727273 10.1563636,0 8,0 C4.87272727,0 2.16727273,1.79272727 0.850909091,4.40727273 L3.52363636,6.48 C4.15272727,4.58909091 5.91636364,3.18181818 8,3.18181818 L8,3.18181818 Z"
                      id="Shape"
                      fill="#EA4335"
                      fill-rule="nonzero"
                    ></path>
                    <polygon id="Shape" points="0 0 16 0 16 16 0 16"></polygon>
                  </g>
                </svg>
                <span>&nbsp;Continue with Google</span>
              </button>
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M15.0784247,15.9571892 C15.5636139,15.9571892 15.9570656,15.5637375 15.9570656,15.0784247 L15.9570656,0.915027027 C15.9570656,0.42965251 15.5636757,0.0363243243 15.0784247,0.0363243243 L0.915027027,0.0363243243 C0.42965251,0.0363243243 0.0363243243,0.42965251 0.0363243243,0.915027027 L0.0363243243,15.0784247 C0.0363243243,15.5636757 0.429590734,15.9571892 0.915027027,15.9571892 L15.0784247,15.9571892 Z"
                    id="Blue_1_"
                    fill="#3C5A99"
                  ></path>
                  <path
                    d="M11.0214054,15.9571892 L11.0214054,9.7917529 L13.0908417,9.7917529 L13.4007104,7.38897297 L11.0214054,7.38897297 L11.0214054,5.85494981 C11.0214054,5.15928958 11.2145792,4.68522008 12.212139,4.68522008 L13.4844788,4.68466409 L13.4844788,2.53559846 C13.2644324,2.5063166 12.5091583,2.44089575 11.6304556,2.44089575 C9.79601544,2.44089575 8.54010811,3.56064865 8.54010811,5.61698842 L8.54010811,7.38897297 L6.46535907,7.38897297 L6.46535907,9.7917529 L8.54010811,9.7917529 L8.54010811,15.9571892 L11.0214054,15.9571892 Z"
                    id="f"
                    fill="#FFFFFF"
                  ></path>
                </svg>
                <span>&nbsp;Continue with Facebook</span>
              </button>
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect width="16" height="16" fill="white"></rect>
                  <path
                    d="M10.0164 2.82125C10.5157 2.1965 10.8546 1.35725 10.7654 0.5C10.0344 0.536 9.14225 0.98225 8.6257 1.60775C8.16163 2.14325 7.75153 3.01775 7.85874 3.839C8.67893 3.91025 9.49912 3.42875 10.0164 2.82125ZM11.8405 8.20025C11.8225 6.36725 13.3347 5.495 13.4051 5.441C12.5512 4.178 11.2175 4.0355 10.7549 3.9995C9.56285 3.92825 8.54998 4.676 7.98094 4.676C7.41116 4.676 6.53999 4.0355 5.5976 4.05275C4.37106 4.07 3.23299 4.7645 2.61073 5.86775C1.33021 8.07575 2.2726 11.351 3.51788 13.1488C4.1229 14.0383 4.85163 15.0178 5.81201 14.9825C6.71917 14.9473 7.07529 14.3945 8.17812 14.3945C9.2802 14.3945 9.60033 14.9825 10.5607 14.9645C11.5563 14.9465 12.1794 14.0743 12.7844 13.184C13.4779 12.17 13.762 11.1905 13.78 11.1372C13.7613 11.12 11.8585 10.3895 11.8405 8.20025Z"
                    fill="black"
                  ></path>
                </svg>
                <span>&nbsp;Continue with Apple</span>
              </button>
              <br />
              <span className="text-[15px]">
                By clicking Sign in, Continue with Google, Facebook, or Apple,
                you agree to Etsy's{" "}
                <span className="text-blue-800 underline underline-offset-1 hover:cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-blue-800 underline underline-offset-1 hover:cursor-pointer">
                  Privacy Policy
                </span>
                .
              </span>
              <br />
              <span className="text-xs">
                Etsy may send you communications; you may change your
                preferences in your account settings. We'll never post without
                your permission.
              </span>
            </div>
            <button className={styles.closeButton} onClick={toggleLogin}>
              X
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
