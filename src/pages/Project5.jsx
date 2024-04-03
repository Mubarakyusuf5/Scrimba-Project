import React from 'react'
import "./Project5.css";

const Project5 = () => {
  return (
    <>
    <div className='container5'>
    <div className='nav5'>
        <div className="logo">
          <img src="/troll.png" alt=""/>
          <h2>Meme Generator</h2>
        </div>
        <h3>React Course - Project 5</h3>
      </div>
      <div className="con5">
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="submit" value='submit'  className='btn'/>
          </form>
      </div>
    </div>
    </>
  )
}

export default Project5