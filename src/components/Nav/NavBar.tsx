import React from 'react';
import { Link } from 'react-router';

import './NavBar.scss';

const NavBar: React.FC = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Test Page</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;