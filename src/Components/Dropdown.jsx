import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./dropdown.css";
import "../Components/Header/header.css";
import img1 from "../Assets/why.svg";
import img2 from "../Assets/customer.svg";
import img3 from "../Assets/changelog.svg";
import img4 from "../Assets/time.svg";
import img5 from "../Assets/alert.svg";
import img6 from "../Assets/segment.svg";
import img7 from "../Assets/machine.svg";
import "../Components/Header/aboutmenu.css";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="about-dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <a href="/">About</a>
        {isActive ? (
          <AiOutlineUp className="toggle-icon" />
        ) : (
          <AiOutlineDown className="toggle-icon" />
        )}
      </div>
      {isActive && (
        <div className="about-wrapper">
          <div className="dropdown-content">
            <div className="about-col">
              <h3 className="item-heading">company</h3>
              <div className="links">
                <a href="https://materialize.com/#why">
                  <img src={img1} alt="why" />
                  <span> why materialize</span>
                </a>
                <a href="https://materialize.com/#why">
                  <img src={img2} alt="customers stories" />
                  <span>customers stories</span>
                </a>
                <a href="https://materialize.com/#why">
                  <img src={img3} alt="changelog" />
                  <span>change log</span>
                </a>
              </div>
            </div>
            <div className="about-col">
              <h3 className="item-heading">Integrations</h3>
              <div className="links">
                <a href="https://materialize.com/integrations/kafka/">
                  <span> Kafka</span>
                </a>
                <a href="https://materialize.com/integrations/kafka/">
                  <span>PostgreSQL</span>
                </a>
                <a href="https://materialize.com/integrations/kafka/">
                  <span>dbt</span>
                </a>
                <a href="https://materialize.com/integrations/kafka/">
                  <span>View All Integrations</span>
                </a>
              </div>
            </div>
            <div className="about-col">
              <h3 className="item-heading">learn</h3>
              <div className="links">
                <a href="https://materialize.com/#why">
                  <img src={img4} alt="real-time analytics" />
                  <span>real-time analytics</span>
                </a>
                <a href="https://materialize.com/#why">
                  <img src={img5} alt=" Automation & Alerting" />
                  <span> Automation & Alerting</span>
                </a>
                <a
                  href="https://materialize.com/#why"
                  alt="Segmentation & personalization "
                >
                  <img src={img6} alt="guides" />
                  <span> Segmentation & personalization</span>
                </a>
                <a
                  href="https://materialize.com/#why"
                  alt="Machine Learning Operations"
                >
                  <img src={img7} alt="Machine Learning Operations" />
                  <span> Machine Learning Operations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
