import './menu-item.css';

function MenuItem({ name }) {
    return (
        <>
            <li className="menu__item">
                <a href="#" class="menu__link">{name}</a>
            </li>
        </>
    );
}

export default MenuItem;