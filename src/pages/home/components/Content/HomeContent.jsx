import React from "react";
import styles from "./Homecontent.module.css";

const HomeContent = () => {
  return (
    <>
      <div className="flex grid-rows-6 w-full justify-center p-8">
        <h1 className="text-3xl font-extralight">Check out the season's biggest trends</h1>
      </div>
      <ul
        className={`${styles.cardContainer} flex gap-3 ml-60 mr-60 justify-center`}
      >
        <li className={`${styles.card} flex-col`}>
          <img
            src="https://i.etsystatic.com/27836385/r/il/cc4d93/5399722545/il_300x300.5399722545_btaa.jpg"
            alt=""
          />
          <p>
            Pinkoweenbr <br></br>Decor
          </p>
        </li>
        <li className={`${styles.card} flex-col justify-center`}>
          <img
            src="https://i.etsystatic.com/6653212/c/2189/2189/411/75/il/d764e9/2245055505/il_300x300.2245055505_4b6n.jpg"
            alt=""
          />
          <p>
            Lumbar Throw <br></br>Pillows
          </p>
        </li>
        <li className={`${styles.card} flex-col justify-center`}>
          <img
            src="	https://i.etsystatic.com/8522419/r/il/feb457/5535339059/il_300x300.5535339059_3fif.jpg"
            alt=""
          />
          <p>
            Wedding <br></br>Invitations
          </p>
        </li>
        <li className={`${styles.card} flex-col justify-center`}>
          <img
            src="https://i.etsystatic.com/46573542/r/il/bb3b0c/5459767748/il_300x300.5459767748_78t0.jpg"
            alt=""
          />
          <p>
            Monogrammed <br></br>Kid's Sweaters
          </p>
        </li>
        <li className={`${styles.card} flex-col justify-center`}>
          <img
            src="https://i.etsystatic.com/6431653/r/il/a83b82/5716261990/il_300x300.5716261990_qvhb.jpg"
            alt=""
          />
          <p>
            Vintage <br></br>Charms
          </p>
        </li>
        <li className={`${styles.card} flex-col justify-center`}>
          <img
            src="https://i.etsystatic.com/33310423/r/il/8d2ab0/5651465187/il_300x300.5651465187_16ux.jpg"
            alt=""
          />
          <p>
            Marble <br></br>Furnishings
          </p>
        </li>
      </ul>
    </>
  );
};

export default HomeContent;
