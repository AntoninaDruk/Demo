import './logo.css';
import headerLogo from './logo2.png';
import { Link } from "react-router-dom";
const AppLogo = () => {
    return (
        <div clasNames="whirl">
            <Link to="/" className="header__logo">
                <img src={headerLogo} alt="logo"/>
            </Link>
            <p>Built by
                <Link to="https://www.nikolaibain.com" className="transition">Nikolai Bain</Link>
            </p>
            <p>Powered by
                <Link to="https://webflow.com" className="transition">Webflow</Link>
            </p>
        </div>
    )
};

export default AppLogo;