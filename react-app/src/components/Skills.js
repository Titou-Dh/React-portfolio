import React from 'react';
import '../App.css';
import html from '../imgs/1.png';
import css from '../imgs/2.png';
import js from '../imgs/3.png';
import tail from '../imgs/4.png';
import bootstrap from '../imgs/5.png';

function SkillItem(props) {
    return (
        <div className='skill-item'>
            <div className='skill-img'>
                <img
                    src={props.img}
                    alt={props.skillName}
                    
                />
            </div>
            <h3>{props.skillName}</h3>
        </div>
    );
}

function Skills() {
    const skills = [
        { img: html, skillName: 'Html' },
        { img: css, skillName: 'css' },
        { img: js, skillName: 'Js' },
        { img: tail, skillName: 'Tailwind' },
        { img: bootstrap, skillName: 'Bootstrap' },
    ];

    return (
        <div>
            <h2 className='section-title'>Skills</h2>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <SkillItem key={index} img={skill.img} skillName={skill.skillName} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
