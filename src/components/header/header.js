import Menulist from '../menu-list/menu-list';
import Logo from "../../img/icons/logo2.png";
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
                        <a href="#mainpage" class="header__logo">
                            <img src={Logo} alt="logo" />
                        </a>
                        <Menulist />
                    </nav>
                    <div className="header__buttons">
                        <a href="#" class="header__button btn-white">Sign in</a>
                        <a href="#" class="header__button-buy btn-blue">Book a demo</a>
                    </div>
                    <Hamburger/>
                   
                </div>
               

            </div>
        </header>
    )
}

export default Header;