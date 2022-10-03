import "./SideNav.scss";

import React from "react";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="logo">
        <header className="header">DevChallenges. io</header>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="/">Colors</a>
          </li>
          <li>
            <a href="/">Typography</a>
          </li>
          <li>
            <a href="/">Spaces</a>
          </li>
          <li>
            <a href="/">Inputs</a>
          </li>
          <li>
            <a href="/">Grid</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
