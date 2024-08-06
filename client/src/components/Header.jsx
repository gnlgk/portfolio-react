import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    <span>port</span>
                    <span>folio</span>
                </Link>
            </h1>
            <nav className="menu">
                <ul>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="skill">Skill</Link></li>
                    <li><Link to="site">Site</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
