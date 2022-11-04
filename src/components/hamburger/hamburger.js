import "./hamburger.css";
import { useState } from 'react';

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
                <div className={`hamb__field ${isActive ? "" : "active"}`} id="hamb">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div className={`popup ${isActive ? "open" : ""}`} id="popup">
                <ul className="menu__list " onClick={closeMenu}> 
                    <li className="menu__item">
                        <a href="#" class="menu__link" onClick={closeMenu}>Features</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" class="menu__link" onClick={closeMenu}>Pricing</a>
                    </li>
                    <li className="menu__item">
                        <a href="#columns4" class="menu__link" onClick={closeMenu}>Integrations</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" class="menu__link" onClick={closeMenu}>Learn</a>
                    </li>
                </ul>
                <div className="header__buttons" onClick={closeMenu}>
                    <a href="#" className="header__button btn-white" onClick={closeMenu}>Sign in</a>
                    <a href="#" className="header__button-buy btn-blue" onClick={closeMenu}>Book a demo</a>
                </div>

            </div>

        </>
    )
}

export default Hamburger;