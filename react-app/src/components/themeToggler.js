import React from 'react';
import '../App.css';
import sun from '../imgs/brightness-high-fill.svg';
import moon from '../imgs/moon-stars-fill.svg';



function ThemeToggler() {
    const toggler = () => {
        const toggleIcon = document.querySelector('.toggle-icon');
        toggleIcon.src = moon;
        document.body.classList.toggle('dark-mode')
}
return (
    <>
        <img onClick={toggler} className='theme-toggler toggle-icon' src={sun} />
    </>
);
}



export default ThemeToggler;