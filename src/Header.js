import {Link } from "react-router-dom";

function Header() {
  return (
    <div>
              <Link to ="/"> 
              <div className="clmn4__text">
                <h1 className="clmn4-block__title">Your tasks, automated.</h1>
                <p className="clmn4-block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              </Link>
    </div>
  );
}

export default Header;