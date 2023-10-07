import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggle(menu) {
    setActiveMenu(activeMenu === menu ? null : menu);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className="menu">
      <button className="md:hidden hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`navigate ${mobileMenuOpen ? "block md:block" : "hidden md:block"}`}>
      <Link to="/">
          <img src="Sustina;.png" alt="Icon" className="icon" />
        </Link>
        <ul>
          <MenuItem
            label="Accelerators"
            subMenuItems={[
              { label: "Branding", to: "/Branding" },
              { label: "Marketing", to: "/Marketing" },
              { label: "Business Accelerators", to: "/BusinessAccelerators" },
            ]}
          />
          <MenuItem
            label="Services"
            subMenuItems={[
              { label: "Partnerships", to: "/Partnerships" },
              { label: "Brand Ambassadors", to: "/Advertisements" },
              { label: "Content", to: "/Content" },
              { label: "Reports", to: "/Reports" },
              { label: "Data Analytics", to: "/DataAnalytics" },
            ]}
          />
          <MenuItem
            label="About"
            subMenuItems={[
              { label: "Mission, Vision and Values", to: "/Mission" },
              { label: "Mentors and Coaches", to: "/Mentors" },
            ]}
          />
          <li>
            <Link
              to="/Journal"
              className="item accordion"
              onClick={() => toggle(null)}
            >
              Journal
            </Link>
          </li>
        </ul>
      </div>
      <p className="text">
        We are dedicated to sustainable living, striving to address environment
        challenges through sustainable business solutions.
      </p>
    </div>
  );

  function MenuItem({ label, subMenuItems }) {
    const isActive = activeMenu === label;

    function handleSubMenuClick() {
      // Close the mobile menu when a submenu item is clicked
      setMobileMenuOpen(false);
    }

    return (
      <li>
        <Link
          to={`/${label}`}
          className={`item accordion ${isActive ? "active" : ""}`}
          onClick={() => {
            toggle(label);
            handleSubMenuClick(); // Close mobile menu on submenu item click
          }}
        >
          {label}
        </Link>
        <ul className={`sublink ${isActive ? "block md:block" : "hidden md:block"}`}>
          {isActive &&
            subMenuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="item accordionItem"
                  onClick={handleSubMenuClick} // Close mobile menu on submenu item click
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </li>
    );
  }
}

export default SideMenu;
