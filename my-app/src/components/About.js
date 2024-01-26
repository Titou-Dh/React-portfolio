import '../App.css';
import profile from '../imgs/profile.png';


function About() {
    return (
        <div>
            <h2 className='section-title'>About Me</h2>
            <div className='about'>
                <img
                    src={profile}
                    alt='profile'
                    className='profile'
                />
                <div>
                    <h3 className='about-title'>Hello, I'm Robert, a computer student and front-end web developper from tunisia</h3>
                    <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse aliquid nulla fugiat quod
                        nostrum reprehenderit eum sequi natus eius consequuntur omnis repudiandae ipsum recusandae id
                        explicabo, necessitatibus aliquam autem harum ipsa. Quam corrupti accusamus adipisci tempore
                        molestiae ex aperiam. Officiis tempora ut illo ad facilis laboriosam sit laborum dicta.</p>
                </div>
            </div>
        </div>
    );
}


export default About;