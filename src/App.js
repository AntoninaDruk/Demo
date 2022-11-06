import React from 'react';
import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link } 
from "react-router-dom";
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import CommonBlocks from './CommonBlocks';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CommonBlocks from "./CommonBlocks";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

function App() {
  return (
    <div>
      <Router>
        <CommonBlocks />
        <Link to ="/"></Link>

        <Routes>
        <Route path="/" element={<CommonBlocks/>} />
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
