import './menu-item.css';
import { Link } from "react-router-dom";

function MenuItem({ name, link }) {
    return (
        <>
            <li className="menu__item">
                <Link to={link} class="menu__link">{name}</Link>
            </li>
        </>
    );
}

export default MenuItem;