import "./one-block.css";
import mainimg from "../../img/main_img.png";
import { Link } from "react-router-dom";

const Oneblock = () => {
    return (
        <>
            <section className="oneblock" id="mainpage">
                <div className="container">
                    <div className="main-block__content">
                        <div className="main-block__body">
                            <h1 className="main-block__title">Your everyday
                                tasks, automated.</h1>
                            <p className="main-block__text">Whirl lets you design and streamline
                                your everyday tasks and workflows in just a few clicks.</p>
                            <div className="main-block__buttons">
                                <Link end to="/" class="main-block__button btn-blue">Book a demo</Link>
                                <Link end to="learnmore" class="main-block__button btn-white">Learn more</Link>
                            </div>
                        </div>
                        <div className="main-block__image">
                            <img src={mainimg} alt="main_img" />
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default Oneblock;