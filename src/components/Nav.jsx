import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const links = [
    { id: 1, name: "Project1", url: "/" },
    { id: 2, name: "Project2", url: "/project2" },
    { id: 3, name: "Project3", url: "/project3" },
    { id: 4, name: "Project4", url: "/project4" },
    { id: 5, name: "Project5", url: "/project5" },
  ];

  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const linking = links.map(({ id, name, url }) => {
    return (
      <li key={id}>
        <NavLink
          to={url}
          className={url === activeLink ? "active" : ""}
        >
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <nav className="nav1">
        <ul className="navcon">{linking}</ul>
      </nav>
    </>
  );
};

export default Nav;
