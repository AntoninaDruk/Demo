import ColorBlock from '../colorBlock-container/colorBlock-container';
import frame from "../../img/companies/frame.png";
import light from "../../img/companies/light.png";
import money from "../../img/companies/money.png";
import hand from "../../img/companies/hand.png";
import "./colorBlocks-container.css";

const ColorBlocks = () => {
    return (
        <div class="containerSect containerColor-Block">
            <div class="blockContent">
                <p class="companies">Trusted by 50,000+ companies</p>
                <img src={frame} alt="companies" />
            </div>
            <div class="colorBlocks-container">
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