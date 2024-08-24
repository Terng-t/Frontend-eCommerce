import React from "react";
import styles from "./PopularGift.module.css";

const PopularGift = () => {
  return (
    <div className={`${styles.popularGiftContainer} flex flex-col pt-[45px]`}>
      <div className={`${styles.label} flex text-2xl text-left`}>
        <h2 className="font-bold">Shop our popular gift categories</h2>
      </div>
      <ul className={`${styles.cardContainer} flex`}>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/14987170/r/il/5757f8/1935725966/il_340x270.1935725966_mi2k.jpg" />
          <p>Anniversary gifts</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/14980522/c/1818/1445/271/…/8746e6/5806724446/il_340x270.5806724446_jqg8.jpg" />
          <p>Gifts for him</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/6103559/r/il/3e4304/1384278263/il_340x270.1384278263_4d7d.jpg" />
          <p>Gifts for her</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/6322679/c/2000/1588/0/882…/6e2e53/1668127003/il_340x270.1668127003_kwjn.jpg" />
          <p>Personalized gift ideas</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/19458228/r/il/6a09b4/1985966876/il_340x270.1985966876_fmhi.jpg" />
          <p>Wedding gifts</p>
        </li>
      </ul>
    </div>
  );
};

export default PopularGift;
