import React from 'react';
import './header.css';

interface HeaderProps {
  title: string;
  image: string
}

const Header: React.FC<HeaderProps> = ({ title, image }) => (
  <header id='header'>
    <div className="hero" style={{ background: `linear-gradient(0deg, rgba(232, 185, 225, 0.50) 0%, rgba(232, 185, 225, 0.50) 100%), url('/${image}') lightgray 50% / cover no-repeat` }}>
      <div className="hero__title">
        <h1 className='montserrat-600'>{title}</h1>
      </div>
    </div>
  </header>
);

export default Header;
