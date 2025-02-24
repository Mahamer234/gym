import "./Plan.css";
import { GiHeartPlus } from "react-icons/gi";
import { FaChessQueen, FaDumbbell } from "react-icons/fa";
const Plans = () => {
    const plans = [
        { id: 1, title: "BASiC PLAN", price: 25, icon: <GiHeartPlus />, listitem: ["2 hours of excercises", "Free consultaion to coaches", "Access to The Community"] },
        { id: 2, title: "PREMIUM PLAN", price: 35, icon: <FaChessQueen />, listitem: ["5 hours of excercises", "Free consultaion to coaches", "Access Accessto minibar"] },
        { id: 3, title: "PRO  PLAN", price: 70, icon: <FaDumbbell />, listitem: ["8 hours of excercises", "Consultation of Private Coach", "Free Fitness Merchandises"] },
    ]
  return (
    <section className="plans" id="plans">
      <div className="blur blur__plans"></div>
      <div className="blur blur__plans2"></div>
      <div className="plan__explain">
        <p className="stroke" style={{color:'transparent'}}>Ready<br/> to Start</p>
        <p>Your<br/> Journey</p>
        <p className="stroke" >now<br/> withus</p>
      </div>

      {/* plans divs  */}
      <div className="plans__data">
        {plans.map((plan) => {
          const { id, title, price, icon, listitem } = plan;
          return (
            <div className="plan__card" key={id}>
              <div className="plan__icon">{icon}</div>
              <h3>{title}</h3>
              <p className="price">${price}</p>
              <ul className="plan_product_ul">
                {listitem.map((item, index) => {
                  return <li key={index} >{item}</li>;
                })}
              </ul>
              <div className="plan__join">Join Now</div>
            </div>
          );})}
      </div>

    </section>
  );
};

export default Plans;
