import '../App.css';


function NavBar() {
    return (
        <nav>
            <div className='tittle'>
                <a href="#">Portfolio.</a>
            </div>
            <div className='nav-child'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </div>
            <div >
                <a className='hire-btn' href='#'>Hire me!</a>
            </div>
        </nav>
    );
}

export default NavBar;