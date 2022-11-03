import AppLogo from "../logo/logo";
import Info from "../info/info";
import Admin from "../admin/admin";
import News from "../newslatter/newslatter";
import Right from "../right/right";
import Social from "../social/social";

import './app.css';

function App() {
    return (
        <div className="footer">
            <div className="container footer__wrapper">
                <AppLogo />
                <div className="infoBlock">
                    <Info />
                    <Admin />
                    <News />
                </div>
            </div>
            <div className="data container">
                <Right/>
                <Social/>
            </div>
        </div>
    )
}


export default App;