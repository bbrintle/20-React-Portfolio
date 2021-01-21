import React from "react";
import './Nav.css'

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary newContainer">
        <div className='title'>
            Blake Brintle
        </div>
        <div className="collapsable">
          <div className="navbar-nav flex-container">
            <div className="nav-item aboutMe">
                <a className="navbar-brand" id="aboutme" href="/aboutme">About Me</a>
            </div>
            <div className="nav-item portfolio">
              <a className="navbar-brand" id="portfolio" href="/portfolio">Portfolio</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
