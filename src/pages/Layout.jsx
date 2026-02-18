import { Outlet, Link } from "react-router-dom";
import Photo from './assest/Images/Photo.jpg';
import { FaBars, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsChevronUp } from 'react-icons/bs';
import './assest/CSS/bootstrap.min.css';
import './assest/CSS/animate.css';
import './assest/CSS/animations.css';
import './assest/CSS/owl.carousel.css';
import './assest/CSS/magnific-popup.css';
import './assest/CSS/main.css';
const Layout = () => {
    return (
        <>
            <div id="page" className="page one-page-style">
                <header id="site_header" className="header mobile-menu-hide">
                    <div className="header-content clearfix">
                        <div className="my-photo">
                            <img src={Photo} alt="image" />
                        </div>

                        <div className="site-title-block">
                            <div className="site-title">Harwant Singh</div>
                        </div>


                        <div className="site-nav">

                            <ul id="nav" className="site-main-menu">
                                <li>
                                    <Link to="/">About Me</Link>
                                </li>
                                <li>
                                    <Link to="/resume">Resume</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/achievements">Achievements</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="social-links">
                            <a href="#" target="_blank"><i> <FaTwitter /> </i></a>
                            <a href="#" target="_blank"><i> <FaLinkedin /> </i></a>
                            <a href="#" target="_blank"><i> <FaFacebookF /> </i></a>
                        </div>

                        <div className="copyrights">© 2023 All rights reserved.</div>

                    </div>
                </header>

                <div className="mobile-header mobile-visible">
                    <div className="mobile-logo-container">
                        <div className="mobile-header-image">
                            <a href="#">
                                <img src={Photo} alt="image" />
                            </a>
                        </div>
                        <div className="mobile-site-title"><a href="#">Harwant Singh</a></div>
                    </div>

                    <a className="menu-toggle mobile-visible">
                        <i> <FaBars /> </i>
                    </a>
                </div>

                <div className="lmpixels-scroll-to-top"><i> <BsChevronUp /> </i></div>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;