import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link h4' to='/'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link h4' to='/videos'>
                        Videos
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;