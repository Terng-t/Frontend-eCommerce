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
          <img src="https://i.etsystatic.com/11486790/r/il/09528c/2809353368/il_340x270.2809353368_l0rq.jpg" />
          <p>Anniversary gifts</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/14980522/c/1818/1445/271/…/8746e6/5806724446/il_340x270.5806724446_jqg8.jpg" />
          <p>Gifts for him</p>
        </li>
        <li className={`${styles.card}`}>
          <img src="https://i.etsystatic.com/37450997/r/il/869e9e/5039584689/il_340x270.5039584689_65iv.jpg" />
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
