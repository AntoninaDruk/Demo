import {Link } from "react-router-dom";
import point from "./Images/4.png";
import Page4 from "./Page4";

function Block4() {
  return (
    <div>
      <Link to="/page4" className="clmn4-wrapper" >
        <img src={point} className="clmn-logo" alt="main_img" />
        <article className="clmn4__content">
          <h3 className="clmn4-footer__title">Stay informed.</h3>
          <p className="clmn4-footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et consectetur.{" "}
          </p>
        </article>
      </Link>
    </div>
  );
}

export default Block4;
