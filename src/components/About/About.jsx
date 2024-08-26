import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={`${styles.aboutContainer} flex flex-col justify-center`}>
        <h2 className="text-[40px]">What is Etsy?</h2>
        <span className="underline underline-offset-1 text-sm hover:cursor-pointer">
          Read our wonderfully weird story.
        </span>
        <div className={`${styles.cardContainer}`}>
          <div className={`${styles.card}`}>
            <div className={`font-bold`}>A community doing good</div>
            <span>
              Etsy is a global online marketplace, where people come together to
              make, sell, buy, and collect unique items. We're also a community
              pushing for positive change for small businesses, people, and the
              planet. Here are some of the ways we're making a positive impact,
              together.
            </span>
          </div>
          <div className={`${styles.card}`}>
            <div className={`font-bold`}>Support independent creators</div>
            <span>
              There's no Etsy warehouse - just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </span>
          </div>
          <div className={`${styles.card}`}>
            <div className={`font-bold`}>Peace of mind</div>
            <span>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </span>
          </div>
        </div>
        <h3 className="font-bold text-xl m-[5px]">
          Have a question? Well, we've got some answers.
        </h3>
        <button className={`${styles.helpCenter_btn}`}>
          Go to Help Center
        </button>
      </div>
    </>
  );
};

export default About;
