import React from "react";
import Events from './data2'
import Card4 from "../components/Card4.jsx";
import "./Project4.css";

export default function Project4() {
  const data = Events.map(Event => {
    return (
      <Card4 
      key={Event.id}
      {...Event}
      />
    )
  })
  return (
    <>
    <div className="container4">
      <nav className="nav4">
        <div className="logo4">
          <img src="/globe.png" alt="" />
          My Travel Journal
        </div>
      </nav>
      <div className="content-container">
      {data}
      </div>
    </div>
    </>
  );
}
