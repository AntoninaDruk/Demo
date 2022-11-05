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


import './App.css';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import CommonBlocks from './CommonBlocks';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
  return (
  return ( 
    <div>
      <main className="page">
        <section className="columns4" id="columns4">
          <div className="container">
            <div className="clmn4__wrapper-content">
              <div className="clmn4__text">
                <h1 className="clmn4-block__title">Your tasks, automated.</h1>
                <p className="clmn4-block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

    <div className="clmn4-footer">
    <Router>
      <Link to="/page1">{<Block1/>}</Link>
      <Link to="/page2">{<Block2/>}</Link>
      <Link to="/page3">{<Block3/>}</Link>
      <Link to="/page4">{<Block4/>}</Link>

      <Routes>
      <Route path="/" element = { <CommonBlocks/> }/>
        <Route path="/page1" element = { <Page1/> }/>
        <Route path="/page2" element = { <Page2/> }/>
        <Route path="/page3" element = { <Page3/> }/>
        <Route path="/page4" element = { <Page4/> }/>
      </Routes>
    </Router>
    </div>

            </div>
</div>

        </section>
      </main>


    </div>
  );
}

export default App;
