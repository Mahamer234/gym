import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formDataemail, setFormDataemail] = useState("");
  /*  const form = useRef(); */

  const handlechange = (e) => {
    setFormDataemail(e.target.value);
  };
  console.log(formDataemail);
  const sendEmail = (e) => {
    e.preventDefault();
    if (formDataemail) {
      emailjs
        .sendForm("service_od605w4", "template_k12hy7l", e.target, {
          publicKey: "RZxgVdEWgnovvgrWX",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            console.log(formDataemail);
            setFormDataemail("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <hr />
        <p>
          <span className="stroke">Ready to </span>Level up
        </p>
        <p>
          your body <span className="stroke"> with us?</span>
        </p>
      </div>
      {/* Right contact  form  */}
      <div className="form_contact">
        <form className="myForm" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter Your Email Address Here "
            name="email"
            value={formDataemail}
            onChange={handlechange}
          />
          <input type="submit" value={"join Now"} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
