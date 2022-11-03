import './logo.css';
import headerLogo from './logo2.png';

const AppLogo = () => {
    return (
        <div clasNames="whirl">
            <a href="#" className="header__logo">
                <img src={headerLogo} alt="logo"/>
            </a>
            <p>Built by
                <a href="https://www.nikolaibain.com" className="transition">Nikolai Bain</a>
            </p>
            <p>Powered by
                <a href="https://webflow.com" className="transition">Webflow</a>
            </p>
        </div>
    )
};

export default AppLogo;