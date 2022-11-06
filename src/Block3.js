import thumbup from "./Img/3.png";
import {Link } from "react-router-dom";
import thumbup from "./Images/3.png";
import Page3 from "./Page3";

function Block3() {
  return (
    <div>
      <Link to="/page3" className="clmn4-wrapper" >
        <img src={thumbup} className="clmn-logo" alt="main_img" />
        <article className="clmn4__content">
          <h3 className="clmn4-footer__title">Automate it all.</h3>
          <p className="clmn4-footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ipsum.
          </p>
        </article>
      </Link>
    </div>
  );
}

export default Block3;
