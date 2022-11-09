import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Oneblock from '../one-block/one-block';
import ColorBlocks from '../colorBlocks-container/colorBlocks-container';

import './app.css';
import CommonBlocks from '../../CommonBlocks';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route end path="/" element={<Oneblock />} />
                        <Route end path="learnmore" element={<ColorBlocks />} />
                    </Routes>
                </main>
            </div>

            <CommonBlocks/>
        </Router>
    );
}

export default App;
