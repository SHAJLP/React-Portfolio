import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <div>
      <section>
    <header className="flex-row space-between px-1">
      <h1>Sophia Altafs Portfolio</h1>
      <div>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
    </section>
  );
};

export default Header;
