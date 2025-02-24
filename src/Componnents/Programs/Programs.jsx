import "./Programs.css";
import { forward } from "../../assets/db";
import { FaPersonRunning } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { GiBurningEmbers } from "react-icons/gi";
import { IoFitness } from "react-icons/io5"; // تم تصحيح `IoFitness`
import { motion } from "framer-motion";

const Programs = () => {
  const programData = [
    {
      id: 1,
      icon: <FaDumbbell size={30} />,
      title: "Strength Training",
      description:
        "In this program, you are trained to improve your strength through many exercises.",
    },
    {
      id: 2,
      icon: <FaPersonRunning size={30} />,
      title: "Cardio Training",
      description:
        "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
    },
    {
      id: 3,
      icon: <GiBurningEmbers size={30} />,
      title: "Fat Burning",
      description:
        "This program is suitable for you who wants to get rid of your fat and lose their weight.",
    },
    {
      id: 4,
      icon: <IoFitness size={30} />,
      title: "Health Fitness",
      description:
        "This program is designed for those who exercise only for their body fitness, not bodybuilding.",
    },
  ];
  return (
    <section className="programs" id="programs">
      <div className="programs__names">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // عندما يظهر العنصر في العرض
          transition={{ type: "tween", duration: 1 }}
          className="stroke"
          style={{ color: "transparent" }}
        >
          Explore our
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // عندما يظهر العنصر في العرض
          transition={{ type: "tween", duration: 2 }}
        >
          Programs
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // عندما يظهر العنصر في العرض
          transition={{ type: "tween", duration: 3 }}
        >
          To shape you
        </motion.p>
      </div>

      {/* ----------- programs data   */}
      <div className="programs__data">
        {programData.map((program) => {
          const { id, icon, title, description } = program;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // يبدأ بالشفافية المنخفضة والتصغير
              animate={{ opacity: 1, scale: 1 }} // يظهر تدريجيا ويتكبير تدريجيا
              whileHover={{ scale: 1.05 }} // عند التمرير فوق الصورة، يتم تكبيرها
              transition={{ duration: 0.5 }}
              className="programs__card"
              key={id}
            >
              <div className="programs__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="Program__join">
                {" "}
                Join Now <img src={forward} title="img" alt="img" />{" "}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
