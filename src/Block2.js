import lighting from "./img/2.png";
import {Link } from "react-router-dom";

function Block2() {
  return (
    <div>
      <main className="page">
            <div className="clmn4__wrapper-content">
              <Link to="/page2" className="clmn4-wrapper">
                <img src={lighting} className="clmn-logo" alt="main_img" />
                <article className="clmn4__content">
                  <h3 className="clmn4-footer__title">Stay informed.</h3>
                  <p className="clmn4-footer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et doloretro.
                  </p>
                </article>
              </Link>
            </div>
      </main>
    </div>
  );
}

export default Block2;
