import React from 'react';

export default function Header(props) {
  return (
    <nav className="header">
      <img className="homeButton" src="/assets/home.png" alt="home button"></img>
      <span className="title">PennyWise</span>
    </nav>
  );
}
