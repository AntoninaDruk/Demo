import lighting from "./Img/2.png";
import {Link } from "react-router-dom";
import lighting from "./Images/2.png";
import Page2 from "./Page2";

function Block2() {
  return (
    <div>
      <Link to="/page2" className="clmn4-wrapper" >
        <img src={lighting} className="clmn-logo" alt="main_img" />
        <article className="clmn4__content">
          <h3 className="clmn4-footer__title">Stay informed.</h3>
          <p className="clmn4-footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloretro.
          </p>
        </article>
      </Link>
    </div>
  );
}

export default Block2;
