import React from 'react';
import '../App.css';
import linkedin from '../imgs/linkedin.svg';
import github from '../imgs/github.svg';
import instagram from '../imgs/instagram.svg';
import email from '../imgs/envelop.svg';



function Contact() {
    return (
        <>
            <div className='contact'>
                <div className='contact-brand'>
                    GZ.
                </div>
                <div className='contact-links'>
                    <div>
                        <img src={email} />
                        robert@gmail.com
                    </div>
                    <div>
                        <img src={github} />
                        Link github
                    </div>
                </div>
                <div className='contact-links'>
                    <div>
                        <img src={instagram} />
                        link insta
                    </div>
                    <div>
                        <img src={linkedin} />
                        Link linkedin
                    </div>
                </div>
            </div>
            <hr/>
            <footer>
                &copy;TitouDh 2024 ui&ux by Gaston;
            </footer>
        </>
    );
}

export default Contact;
