import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Oneblock from '../one-block/one-block';
import ColorBlocks from '../colorBlocks-container/colorBlocks-container';

import CommonBlocks from "../blocks/CommonBlocks";
import Page1 from "../blocks/Page1";
import Page2 from "../blocks/Page2";
import Page3 from "../blocks/Page3";
import Page4 from "../blocks/Page4";

import AppLogo from "../logo/logo";
import Info from "../info/info";
import Admin from "../admin/admin";
import News from "../newslatter/newslatter";
import Right from "../right/right";
import Social from "../social/social";



import './app.css';

function App() {
    return (

        <div className="app">

            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route end path="/" element={<Oneblock />} />
                        <Route end path="learnmore" element={<ColorBlocks />} />
                    </Routes>

                    <Routes>
                        <Route path="/" element={<CommonBlocks />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                        <Route path="/page4" element={<Page4 />} />
                    </Routes>

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
                            <Right />
                            <Social />
                        </div>
                    </div>

                </main>
            </Router>

        </div>


    );
}

export default App;
