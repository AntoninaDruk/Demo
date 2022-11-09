import { Link } from "react-router-dom";
import Menulist from '../menu-list/menu-list';
import Logo from "../../img/logo2.png";
import Hamburger from '../hamburger/hamburger';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper__headerblue">
                <div className="container">
                    <div className="headerblue">
                        <p className="header__blue">
                            A Webflow template for SaaS products. <span> See all templates</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header__container" id="menu">
                    <nav className="header__menu">
                        <Link to="/" class="header__logo">
                            <img src={Logo} alt="logo" />
                        </Link>
                        <Menulist />
                    </nav>
                    <div className="header__buttons">
                        <Link to="/" className="header__button btn-white">Sign in</Link>
                        <Link to="/" className="header__button-buy btn-blue">Book a demo</Link>
                    </div>
                    <Hamburger/>
                   
                </div>
               

            </div>
        </header>
    )
}

export default Header;