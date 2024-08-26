import React from "react";
import styles from "./Cart.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div
        className={`${styles.cartContentContainer} flex flex-col border-t-[2px] border-b-[2px] justify-center items-center`}
      >
        <div>
          <span className="flex items-center">
            <svg
              className="mr-[7px]"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48 48"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              width="48"
              height="48"
              aria-hidden="true"
              focusable="false"
            >
              <g id="e0NMFoeIPOT2_to" transform="translate(44.162561,5.846695)">
                <g id="e0NMFoeIPOT2_tr" transform="rotate(-5)">
                  <g transform="translate(-44.150002,-6.29719)">
                    <path
                      d="M34.7,33.1l4.4-4.4c4.8-4.8,4.8-12.6,0-17.4v0c-4-4-10.1-4.9-14.7-2.1L17.7,15l17,18.1Z"
                      fill="#4d6bc6"
                    ></path>
                    <path
                      d="M36.5,33.5l-2.2-2.2l3.6-3.6c4.2-4.2,4.2-11,0-15.2C34.4,9,29,8.4,25.1,10.8L23.5,8.2C28.6,5,35.6,5.8,40.1,10.3c5.4,5.4,5.4,14.2,0,19.6l-3.6,3.6Z"
                      fill="#222"
                    ></path>
                  </g>
                </g>
              </g>
              <g id="e0NMFoeIPOT5_to" transform="translate(4.2,5.697011)">
                <g id="e0NMFoeIPOT5_tr" transform="rotate(5)">
                  <g transform="translate(-3.85,-6.297191)">
                    <path
                      d="M40.5,25.2l-4.8-4.8v0l-9-9c-4.8-4.8-12.6-4.8-17.4,0s-4.9,12.6-.1,17.4L15.4,35v0l4.4,4.4c1.2,1.2,3.2,1.2,4.4,0s1.2-3.2,0-4.4l-1.7-1.7l3.9,3.9c1.2,1.2,3.2,1.2,4.4,0s1.2-3.2,0-4.4l1.1,1.1c1.2,1.2,3.2,1.2,4.4,0v0c1.2-1.2,1.2-3.2,0-4.4l-4.9-4.9v0l4.9,4.9c1.2,1.2,3.2,1.2,4.4,0c1-1.2,1-3.1-.2-4.3Z"
                      fill="#d7e6f5"
                    ></path>
                    <path
                      d="M42.7,27.4c0-1.2-.5-2.4-1.4-3.3l-4.8-4.8v0l-9-9c-5.4-5.4-14.2-5.4-19.6,0s-5.4,14.2,0,19.6l6.2,6.2v0l4.4,4.4c.9.9,2.1,1.3,3.3,1.3s2.4-.4,3.3-1.3c.4-.4.7-.9,1-1.5.7.4,1.5.6,2.3.6c1.2,0,2.4-.4,3.3-1.3.6-.6,1-1.3,1.2-2c.3.1.7.1,1,.1c1.2,0,2.4-.5,3.3-1.4.8-.8,1.3-1.9,1.3-3c1.1-.1,2.2-.5,3-1.3.7-.9,1.2-2.1,1.2-3.3Zm-3.6,1.1c-.6.6-1.6.6-2.2,0l-7.6-7.6L27.2,23l7.6,7.6c.6.6.6,1.6,0,2.2s-1.6.6-2.2,0l-1.1-1.1L25,25.2l-2.2,2.2l6.5,6.5c.6.6.6,1.6,0,2.2s-1.6.6-2.2,0L25,33.9l-4.4-4.4-2.2,2.2l4.4,4.4c.6.6.6,1.6,0,2.2s-1.6.6-2.2,0l-1.9-1.9v0L10,27.7c-4.2-4.2-4.2-11,0-15.2s11-4.2,15.2,0l6.2,6.2v0L39,26.3c.3.3.5.7.5,1.1.1.4-.1.8-.4,1.1Z"
                      fill="#222"
                    ></path>
                  </g>
                </g>
              </g>
              <g id="e0NMFoeIPOT8_to" transform="translate(28.52,15.1)">
                <g id="e0NMFoeIPOT8_tr" transform="rotate(-5)">
                  <g transform="translate(-27.765359,-14.148534)">
                    <path
                      d="M32.3,15.1L23,19.8c-1.7,1.2-4.2.8-5.4-.9v0c-1.2-1.7-.8-4.1.9-5.4c2.1-1.5,4.7-3.4,5.6-3.9C28.7,6.7,35,7.4,39,11.4v0"
                      fill="#4d6bc6"
                    ></path>
                    <path
                      d="M19.4,14.7l1.9-1.4c1-.7,2-1.4,2.7-1.9.4-.3.7-.5.9-.6.7-.4,1.4-.7,2.1-.9c3.7-1.2,8-.3,10.9,2.6l2.2-2.2c-4.2-4.2-10.9-5.2-16-2.5-.3.1-.5.3-.8.4-.4.3-1.3.9-2.3,1.6-.5.3-.9.7-1.4,1l-1.9,1.4c-2.4,1.7-3,5.1-1.3,7.5.8,1.2,2.1,2,3.5,2.2.3.1.6.1.9.1c1.1,0,2.2-.3,3.1-1l5.9-4.1l2.6-1.8-2.2-2.2-2.6,1.8-5.4,3.8c-.5.4-1.1.5-1.7.4s-1.1-.4-1.5-1c-.9-1-.6-2.5.4-3.2Z"
                      fill="#222"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="font-bold">Buy confidently</p>&#160;with Etsy's
            Purchase Protection program for buyers, get a full refund in the
            rare case your item doesn't arrive, arrives damaged, or isn't as
            described.&nbsp;{" "}
            <p className="underline underline-offset-1 hover:cursor-pointer">
              See eligibility
            </p>
          </span>
        </div>
        <div className="text-[30px] m-[20px]">
          <h1>Your cart is empty.</h1>
        </div>
        <div>
          <span className="flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/497/497348.png"
              alt=""
            />
            &nbsp;Etsy offsets carbon emissions from every delivery
          </span>
        </div>
      </div>
      <div className={`${styles.finalContainer}`}>
        <div>
          <ul>
            <li className={`${styles.languageContainer} flex font-bold`}>
              <svg
                className="w-[18px] h-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2ZM9,18.883v0.528A7.938,7.938,0,0,1,4.06,11.06l3.385,3.385a2.967,2.967,0,0,0,1.649,4.4ZM17.5,15a2.509,2.509,0,0,0,.5-0.05V15a0.992,0.992,0,0,0,.927.985A8,8,0,0,1,12,20c-0.216,0-.427-0.016-0.639-0.032l1.254-2.5-0.015.006A2.968,2.968,0,0,0,13,16a2.988,2.988,0,0,0-5-2.221V11H9a1,1,0,0,0,1-1V9a1,1,0,0,0,1-1,1,1,0,0,0,0-2H6.726A7.9,7.9,0,0,1,14,4.263V6a1,1,0,0,0,2,0V5.082a8.047,8.047,0,0,1,2,1.649V7H17a1,1,0,0,0,0,2h2.411a7.941,7.941,0,0,1,.326,1H17a2.556,2.556,0,0,0-2,2.5A2.5,2.5,0,0,0,17.5,15Z"></path>
              </svg>
              <span>
                &nbsp; Thailand &nbsp; | &nbsp; English (US) &nbsp; | &nbsp; ฿
                (THB)
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-gray-500">
          <span>© 2024 Etsy, Inc.</span>
          <ul className={`${styles.termOfUseContainer} flex`}>
            <li>
              <span>Terms of Use</span>
            </li>
            <li>
              <span>Privacy</span>
            </li>
            <li>
              <span>Interest-based ads</span>
            </li>
            <li>
              <span>Local Shops</span>
            </li>
            <li>
              <span>Regions</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="flex my-[50px] justify-center text-center text-[13px]">
          Merchant is Etsy, Inc. (USA), Etsy Ireland UC (Ireland), Etsy UK
          Limited (United Kingdom), Etsy Canada Limited (Canada), or Etsy
          Australia Pty Limited (Australia) depending on the currency and
          location of the payment instrument issuance.
        </span>
      </div>
      <div className="flex place-content-around text-[13px] my-[40px] mx-[400px]">
        <span>Etsy, Inc., USA 117 Adams Street Brooklyn, NY 11201</span>
        <span>
          Etsy Ireland UC One Le Pole Square Ship Street Great Dublin 8
        </span>
      </div>
    </>
  );
};

export default Cart;
