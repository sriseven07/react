import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="heading">
                    <Link>
                        <h2 className='navHeading'>TESPA</h2>
                    </Link>
                </div>
                <div className="navButton">
                    <button className='navBtn'>Login</button>
                    <button className='navBtn'>Signup</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;