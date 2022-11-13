import { Link } from "react-router-dom";
import branch from "./Images/1.png";
import Page1 from "./Page1";

function Block1() {
  return (
    <div id="page1">
           <div className="clmn4__wrapper-content">
              <Link to="page1" className="clmn4-wrapper">
                <img src={branch} className="clmn-logo" alt="main_img" />
                <article className="clmn4__content">
                  <h3 className="clmn4-footer__title">Learn your options.</h3>
                  <p className="clmn4-footer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </article>
              </Link>
            </div>
  
    </div>
  );
}

export default Block1;

{
  /* <Link to="/page1" className='link'>{<Block1/>}</Link> */
}
