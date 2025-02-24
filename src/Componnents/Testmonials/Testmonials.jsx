import { useState } from "react";
import { back, forward, image1, image2, image3 } from "../../assets/db";
import "./Testmonials.css";
import { motion } from "framer-motion";
const Testmonials = () => {
  const [active, setactive] = useState(0);
  const sliderData = [
    {
      id: 1,
      image: image1,
      name: "MATHEW HENDRICKSON  ",
      job: "ENTREPRENEUR",
      description:
        "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    },
    {
      id: 2,
      image: image2,
      name: "JOHN KEVIN ",
      job: "COACH",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint",
    },
    {
      id: 3,
      image: image3,
      name: "FRANKLIN ",
      job: "CUSTOMER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint",
    },
  ];

  return (
    <section className="testmonials" id="testmonials">
      {/* left div testmonials content */}
      <div className="testmonials__content">
        <h2>Testmonials</h2>
        <span className="tesStroke stroke">What they</span>
        <span>say about us</span>
        <motion.p
        key={active}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}     
        transition={{duration:.5}}
        >{sliderData[active].description}</motion.p>
        <p>
          <span className="coachName">{sliderData[active].name}</span>-{" "}
          {sliderData[active].job}
        </p>
      </div>
      {/* right div testmonials image */}
      <div className="testmonials__image">
        {/* navigation buttons */}
        <div className="navigation__buttons">
          <button
            onClick={() =>
                setactive((prev)=> (prev - 1 + sliderData.length) % sliderData.length)
            }
          >
            <img src={back} alt="back"   draggable={false}/>
          </button>
          <button
            onClick={() =>
              setactive((prev)=> (prev + 1) % sliderData.length)
            }
          >

            <img src={forward} alt="forward" draggable={false} />
          </button>
        </div>
        {/* sliders images */}

        <div className="testmonials__image__slider">
          <div className="img__container">
          <motion.img
          key={active}// مهم جدا عشان انيمشن يشتغل
          initial={{opacity:0,x:100}} 
          animate={{opacity:1,x:0}}
          exit={{opacity:0, x:-100}}
          transition={{duration:.5}}
           src={sliderData[active].image} alt="testmonials" draggable={false} />
          </div>
        </div>
      </div>
      {console.log(active)}
    </section>
   
  );
};

export default Testmonials;
