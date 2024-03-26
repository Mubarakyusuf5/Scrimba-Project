import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const links = [
    { id: 1, name: "Project1", url: "/" },
    { id: 2, name: "Project2", url: "/project2" },
    { id: 3, name: "Project3", url: "/project3" },
    { id: 4, name: "Project4", url: "/project4" },
  ];

  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("activeLink") || "/";
  });

  useEffect(() => {
    localStorage.setItem("activeLink", isActive);
  }, [isActive]);

  const linking = links.map(({ id, name, url }) => {
    return (
      <li key={id}>
        <Link
          to={url}
          className={isActive === url ? "active" : ""}
          onClick={() => setIsActive(url)}
        >
          {name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav>
        <ul className="navcon">{linking}</ul>
      </nav>
    </>
  );
};

export default Nav;
