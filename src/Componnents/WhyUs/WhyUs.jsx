import "./WhyUs.css";
import { motion } from "framer-motion";
import { addids, foure, nb, nike, one, three, two } from "../../assets/db";
const WhyUs = () => {
  return (
    <section className="why__us " id="whyus">
      {/* why us left gallary  */}
      <div className="whyUs__gallary">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // يبدأ بالشفافية المنخفضة والتصغير
          animate={{ opacity: 1, scale: 1 }} // يظهر تدريجيا ويتكبير تدريجيا
          whileHover={{ scale: 1.01 }} // عند التمرير فوق الصورة، يتم تكبيرها
          transition={{ duration: 0.5 }}
          src={one}
          alt=" img"
          title="traning image"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // يبدأ بالشفافية المنخفضة والتصغير
          animate={{ opacity: 1, scale: 1 }} // يظهر تدريجيا ويتكبير تدريجيا
          whileHover={{ scale: 1.01 }} // عند التمرير فوق الصورة، يتم تكبيرها
          transition={{ duration: 0.5 }}
          src={two}
          alt=" img"
          title="traning image"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // يبدأ بالشفافية المنخفضة والتصغير
          animate={{ opacity: 1, scale: 1 }} // يظهر تدريجيا ويتكبير تدريجيا
          whileHover={{ scale: 1.01 }} // عند التمرير فوق الصورة، يتم تكبيرها
          transition={{ duration: 0.5 }}
          src={three}
          alt=" img"
          title="traning image"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // يبدأ بالشفافية المنخفضة والتصغير
          animate={{ opacity: 1, scale: 1 }} // يظهر تدريجيا ويتكبير تدريجيا
          whileHover={{ scale: 1.01 }} // عند التمرير فوق الصورة، يتم تكبيرها
          transition={{ duration: 0.5 }}
          src={foure}
          alt="img"
          title="traning image"
        />
      </div>
      {/* right div content  */}
      <div className="whyUs__content">
        <h4>some reasons</h4>
        <h2>
          <span className="stroke">Why</span> choose us?
        </h2>
        <ul>
          <li>over 140+ expert coachs</li>
          <li>train smarter and faster than before</li>
          <li>1 free program for new member</li>
          <li>reliable partners</li>
        </ul>
        <h4>our partners</h4>
        <div className="whyUs__partners">
          <img src={nb} alt="partner" title="partner" />
          <img src={addids} alt="partner" title="partner" />
          <img src={nike} alt="partner" title="partner" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
