import '../App.css';
import hero from '../imgs/hero.png';


function Main() {
    return (
        <div className='main'>
            <div>
                <h2 className="hero-title">Hey there👋</h2>
                <h2 className="hero-title">I'm Elbert.</h2>
                <p className="hero-text">I like to kraft solid and acalable front-end products with great user expericences.</p>
                <a href='#' className='hire-btn1'>Hire</a>
            </div>
            <div>
                <img
                    src={hero} 
                    className='hero'
                />
            </div>
        </div>
    );
}


export default Main;