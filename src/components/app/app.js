import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Oneblock from '../one-block/one-block';
import ColorBlocks from '../colorBlocks-container/colorBlocks-container';

import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route end path="/" element={<Oneblock />} />
                        <Route end path="learn" element={<ColorBlocks />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
