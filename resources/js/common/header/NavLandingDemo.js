import React from 'react';
import { Link } from 'react-scroll';

const NavLandingDemo = () => {
    return (
        <ul className="mainmenu">
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="intro"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Intro
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="demos"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Demos
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="features"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Features
                </Link>
            </li>
            <li>
                <Link
                    className="landing-demo-nav-btn"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    FAQ
                </Link>
            </li>
        </ul>
    )
}

export default NavLandingDemo;