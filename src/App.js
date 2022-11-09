import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/css/App.css";
import "./components/css/reset.css";
import "./components/css/media.css";

import Header from "./components/header/header";
import Oneblock from "./components/one-block/one-block";
import ColorBlocks from "./components/colorBlocks-container/colorBlocks-container";
import ColorBlock from "./components/colorBlock-container/colorBlock-container";

import CommonBlocks from "./CommonBlocks";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Header /> 
          < ColorBlock />
          <main>
            <Routes>
              <Route end path="/" element={<Oneblock/>} />
              <Route end path="learnmore" element={ <ColorBlocks/> } />
            </Routes>
          </main>
        </div>
        
        <CommonBlocks />


        <Routes>
          <Route path="/" element="" />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
