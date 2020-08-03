import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 20){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    });

    const navSlide = () => {
    const burger = document.querySelector('.burger');
        burger.classList.toggle('toggle');

    const navv = document.querySelector('.nav-links');
     navv.classList.toggle('nav-active');
     const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            });
        
    }
    return (<>
            
        <nav className={scrolled ? 'sticky scrolled' : 'sticky'}>
            <div className="logo" onClick={()=>{scroll.scrollToTop();}}>
                ARSH
            </div>
            <ul className='nav-links'>

                <li><Link exact activeClassName='active' className='link' smooth={true} duration={1000} to='home'>Home</Link></li>
                <li><Link exact activeClassName='active' className='link' smooth={true} duration={1000} to='portfolio'>Portfolio</Link></li>
                <li><Link exact activeClassName='active' className='link' smooth={true} duration={1000} to='services'>Services</Link></li>
                <li><Link exact activeClassName='active' className='link' smooth={true} duration={1000} to='contact'>Contact</Link></li>

            </ul>
            <div className="burger" onClick={navSlide}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </>);
}

export default Navbar;