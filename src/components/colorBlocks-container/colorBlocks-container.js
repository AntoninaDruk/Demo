import ColorBlock from '../colorBlock-container/colorBlock-container';
import focusfox from "../../img/focusfox.png";
import novintech from "../../img/novintech.png";
import optimer from "../../img/optimer.png";
import carded from "../../img/carded.png";
import light from "../../img/light.png";
import money from "../../img/money.png";
import hand from "../../img/hand.png";
import "./colorBlocks-container.css";

const ColorBlocks = () => {
    return (
        <div className="containerSect containerColor-Block">
            <div className="blockContent">
                <p className="companies">Trusted by 50,000+ companies</p>
                <div className="blockCompanies">
                    <div className="blockCmpns4">
                        <img src={focusfox} />
                    </div>
                    <div className="blockCmpns4"><img src={novintech} /></div>
                    <div className="blockCmpns4"><img src={optimer} /></div>
                    <div className="blockCmpns4"><img src={carded} /></div>
                </div>
            </div>
            <div className="colorBlocks-container">
                <ColorBlock classblock="colorBlock color1" classimg="colorBlock-img1" img={light} title="Fast. Really fast." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. "/>

                <ColorBlock classblock="colorBlock color2" classimg="colorBlock-img2" img={money} title="More bang for buck." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat."/>

                <ColorBlock classblock="colorBlock color3" classimg="colorBlock-img3" img={hand} title="Safe and secure." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat."/>
            </div>
        </div>
    )
}

export default ColorBlocks;