import './social.css';
import tw from './social-img/tw.png';
import li from './social-img/li.png';
import fb from './social-img/fb.png';

const Social =() => {
    return (
<div class="social">
        <a href="twitter.com" className="socialmedia invert"> </a>
        <img src={tw} className="socialImg"
          alt="twitter"/>
        <a href="lidekin.com" className="socialmedia invert"> </a>
        <img src={li} className="socialImg"
          alt="linkedin"/>
        <a href="#" className="socialmedia invert"> </a>
        <img src={fb} className="socialImg" alt="facebook"/>
      </div>
    )
}

export default Social;