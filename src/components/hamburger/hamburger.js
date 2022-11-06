import "./hamburger.css";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Hamburger = () => {
    const [isActive, setActive] = useState(false);

    const openHam = () => {
        const toggleClass = () => {
            setActive(!isActive);
        };

        toggleClass();
    };

    const closeMenu = () => {
        setActive(false);
    };

    return (
        <>
            <div className={`hamb ${isActive ? "active" : ""}`}
                onClick={openHam}>
                <div className={`hamb__field ${isActive ? "active" : ""}`} id="hamb">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div className={`popup ${isActive ? "open" : ""}`} id="popup">
                <ul className="menu__list " onClick={closeMenu}>
                    <li className="menu__item">
                        <Link end to="/" class="menu__link" onClick={closeMenu}>Features</Link>
                    </li>
                    <li className="menu__item">
                        <Link end to="/" class="menu__link" onClick={closeMenu}>Pricing</Link>
                    </li>
                    <li className="menu__item">
                        <Link end to="/" class="menu__link" onClick={closeMenu}>Integrations</Link>
                    </li>
                    <li className="menu__item">
                        <Link end to="learn" class="menu__link" onClick={closeMenu}>Learn</Link>
                    </li>
                </ul>
                <div className="header__buttons" onClick={closeMenu}>
                    <Link end to="/" className="header__button btn-white" onClick={closeMenu}>Sign in</Link>
                    <Link end to="/" className="header__button-buy btn-blue" onClick={closeMenu}>Book a demo</Link>
                </div>

            </div>

        </>
    )
}

export default Hamburger;