import branch from "./Img/1.png";
import Page1 from "./Page1";

function Block1() {
  return (
    <div>
      <a href="#" className="clmn4-wrapper">
        <img src={branch} className="clmn-logo" alt="main_img" />
        <article v="clmn4__content">
          <h3 className="clmn4-footer__title">Learn your options.</h3>
          <p className="clmn4-footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </article>
      </a>
    </div>
  );
}

export default Block1;
