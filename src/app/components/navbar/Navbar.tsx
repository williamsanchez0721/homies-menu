// Archivo: Navbar.tsx
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import './navbar.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const handleClickMenu = () => {
        setShowMenuMobile(!showMenuMobile);
    };

    return (
        <nav className='navegation montserrat-100'>
            <div className='nav__container'>
                <div className='logo'>
                    <Link href="/">
                        <Image 
                            alt="Logo de Cococu"
                            src="/logo_rosado.png"
                            width={60}
                            height={40}
                            quality={100}
                        />
                    </Link>
                </div>
                <ul className='list__nav'>
                    <li className='nav__link montserrat-400'>
                        <Link href="/">Menú</Link>
                        <ul className='sub__menu'>
                            <li className='nav__link sub__link'>
                                <Link href="/burgers">Burgers</Link>
                            </li>
                            <li className='nav__link sub__link'>
                                <Link href="/homies_kids">Homies Kids</Link>
                            </li>
                            <li className='nav__link sub__link'>
                                <Link href="/bebidas">Bebidas</Link>
                            </li>
                            <li className='nav__link sub__link'>
                                <Link href="/malteadas">Malteadas</Link>
                            </li>
                            <li className='nav__link sub__link'>
                                <Link href="/adicionales">Adicionales</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='nav__link point'>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                </ul>
                <div className='reservation'>
                    <Link href="/">Reservar</Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36" fill="none" className='menu__icon' onClick={handleClickMenu}>
                    <path d="M1.0625 7.71429H28.6875C29.2745 7.71429 29.75 7.13893 29.75 6.42857V1.28571C29.75 0.575357 29.2745 0 28.6875 0H1.0625C0.475469 0 0 0.575357 0 1.28571V6.42857C0 7.13893 0.475469 7.71429 1.0625 7.71429ZM32.9375 14.1429H5.3125C4.72547 14.1429 4.25 14.7182 4.25 15.4286V20.5714C4.25 21.2818 4.72547 21.8571 5.3125 21.8571H32.9375C33.5245 21.8571 34 21.2818 34 20.5714V15.4286C34 14.7182 33.5245 14.1429 32.9375 14.1429ZM28.6875 28.2857H1.0625C0.475469 28.2857 0 28.8611 0 29.5714V34.7143C0 35.4246 0.475469 36 1.0625 36H28.6875C29.2745 36 29.75 35.4246 29.75 34.7143V29.5714C29.75 28.8611 29.2745 28.2857 28.6875 28.2857Z" fill="#FFE3FB"/>
                </svg>
            </div>

            {showMenuMobile && (
                <div className="mobile__menu">
                    <ul className='nav__menu'>
                        <li className='nav__link'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='nav__link'>
                            <Link href="#" className='dropdown__link'>Menú
                                <span className="material-symbols-outlined">
                                    expand_more
                                </span>
                            </Link>
                            <input type="checkbox" className='dropdown__check'/>

                            <div className='dropdown__content'>

                                <ul className='dropdown__sub'>
                                    <li className='dropdown__li'>
                                        <Link href="/burgers" className='dropdown__anchor'>Burgers</Link>
                                    </li>
                                    <li className='nav__link sub__link'>
                                        <Link href="/homies_kids" className='dropdown__anchor'>Homies kids</Link>
                                    </li>
                                    <li className='nav__link sub__link'>
                                        <Link href="/bebidas" className='dropdown__anchor'>Bebidas</Link>
                                    </li>
                                    <li className='nav__link sub__link'>
                                        <Link href="/malteadas" className='dropdown__anchor'>Malteadas</Link>
                                    </li>
                                    <li className='nav__link sub__link'>
                                        <Link href="/adicionales" className='dropdown__anchor'>Adicionales</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
