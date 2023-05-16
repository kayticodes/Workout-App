import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <ul className='nav-links'>
                <Link className="App-link" to="/">Home Page</Link>
                <Link className="App-link" to="/create-exercise">Add Exercise</Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar 