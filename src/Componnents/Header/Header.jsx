import {
  heartImage,
  heoImagebback,
  heroImage,
  ratingImg,
} from "../../assets/db";
import Navbar from "../NavBar/Navbar";
import "./Header.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Header = () => {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="header " id="home">
      <div className="blur blure__h"></div>
      <div className="header__left">
        <Navbar />
        {/*  header left content*/}
        <div className="header__left__content">
          {/* the best div */}
          <div className="the__best">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: 8 }}
              transition={{ ...transition, type: "tween" }}
              className="best_absolute"
            ></motion.div>
            <div className="bestcontent">THE BEST FITNESS CLUB IN THE TOWN</div>
          </div>
          {/* h1 */}
          <h1 className="header__left__content__h1">
            <span className="stroke">Shape </span>Your
            <br />
            Ideal body
          </h1>
          {/* description */}
          <p className="header__left__content__description">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>
          {/* div couter up container ----- */}
          <div className="counter__up__container">
            <div className="couter__container__div">
              <h3> <CountUp start={0} end={140} prefix="+" duration={3}/></h3>
             
              <p>expert coaches</p>
            </div>
            <div className="couter__container__div">
              <h3> <CountUp start={0} end={978 } prefix="+" duration={5}/></h3>
              <p>Members joined</p>
            </div>
            <div className="couter__container__div">
              <h3><CountUp start={0} end={50} prefix="+" duration={1}/> </h3>
              <p>fitness programs</p>
            </div>
          </div>
          {/* ------ header buttons  */}
          <div className="header_button">
            <button>get started</button>
            <button>learn More</button>
          </div>
        </div>
      </div>
      {/* ---------- header right  */}
      <div className="header__right">
        <button className="header__right__button">Join Us</button>
        {/* heart div  */}
        <div className="heart">
          <img
            src={heartImage}
            title="heart"
            alt="heartimg"
            draggable={false}
          />
          <span>Heart Rate</span>
          <h3>116 bpm</h3>
        </div>
        {/* absolute Images  */}
        <img
          src={heoImagebback}
          alt="back"
          className="hero_back_img"
          draggable={false}
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ...transition, duration: 6 }}
          src={heroImage}
          alt="back"
          className="hero_img"
          draggable={false}
        />
        {/* ---------------- rating div  */}
        <div className="rating">
          <img src={ratingImg} alt="rating" draggable={false} />
          <div className="rating__right">
            <p>Calories burned</p>
            <p>220</p>
            <p>Kcal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
