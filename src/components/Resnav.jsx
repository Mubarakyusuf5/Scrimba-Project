import './Resnav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resnav = () => {

  const Pages = [
    { id: 1, name: 'Home', url: '/home' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Contact', url: '/contact' },
    { id: 4, name: 'Services', url: '/services' },
  ];

  const [activePage, setActivePage] = useState('/Home');
  const [isRes, setIsRes] = useState(true);

  const linking = Pages.map(({id, name, url}) => {
    return (
      <li key={id}>
        <Link to={url}
        className={activePage === url ? "active" : ""}
        onClick={() => setActivePage(url)}
        >{name}</Link>
      </li>
    )
  })

  const handleClick = () =>{
    setIsRes(prevIsRes => !prevIsRes)
  }

  return (
    <div>
      <nav className={!isRes ? "navbar active" : "navbar"} >
        <div className="logo">
            <h1>Nav</h1>
        </div>
        <ul className={!isRes ? "show" : ""}> {/* Apply conditional class */}
          {linking}
        </ul>
        <button onClick={handleClick}>{isRes ? "open" : "close"}</button>
      </nav>
    </div>
  );
};

export default Resnav;
