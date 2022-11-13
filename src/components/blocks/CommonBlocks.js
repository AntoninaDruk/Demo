import { Link } from "react-router-dom";

import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";

import './CommonBlocks.css';

function CommonBlocks() {
  return (
    <div>

        <section className="columns4" id="columns4">
          <div className="container">
            <div className="clmn4__wrapper-content">
              <div className="clmn4__text">
                <Link to = "/">
                <h1 className="clmn4-block__title">Your tasks, automated.</h1>
                <p className="clmn4-block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </Link>
              </div>
              <div className="clmn4-footer">
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default CommonBlocks;
