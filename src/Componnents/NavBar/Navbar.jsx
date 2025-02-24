import "./NavBar.css";
import { CiMenuFries } from "react-icons/ci";
import { logo } from "../../assets/db";
import { useState } from "react";
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const links = [
    { name: "Home", to: "home" },
    { name: "programs", to: "programs" },
    { name: "why us", to: "whyus" },
    { name: "plans", to: "plans" },
    { name: "testmonials", to: "testmonials" },
  ];
  const [menuOpened, setMenuOpend] = useState(false);
  console.log(menuOpened)
  const handleClick =(link)=>{
    scrollToSection(link);
    setMenuOpend(false)
  }
  return (
    <nav>
      <img src={logo} title="logo" alt="logo" className="Logo" />
      {
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <button onClick={() => scrollToSection(link.to)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      }
      {/* ----------------- mobile menu */}
      <div className="mobile__icon">
        <CiMenuFries
          size={35}
          color="orange"
          onClick={() => setMenuOpend(!menuOpened)}
          style={{ cursor: "pointer", backgroundColor:"#333",padding:".2rem ", borderRadius:"5px"}}
        />
        {menuOpened && (
          <ul className="nav-linksm">
            {links.map((link, index) => (
              <li key={index}>
                <button onClick={()=>handleClick(link.to)} >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
