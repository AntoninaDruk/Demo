import computer from "./Images/computer.png";
import './Page1.css'

const Page1 = () => {
  return (
    <div className="bg-Grey">
      <div className="container">
        <div className="bg-Grey__content">
          <div className="bg-Grey__contentText">
            <p className="bg-Grey__textBig">
              We will take care of everything, 
              so you can get back to relaxing.
            </p>
            <div className="bg-Grey__textSmall-container">
              <div className="bg-Grey__textSmall">
                <p className="bg-title bg-img__1 bg-after__arrow">Anti-loss technology</p>
                <p className="bg-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="bg-Grey__textSmall">
                <p className="bg-title2 bg-img__2 bg-after__arrow">Exchange easily</p>
              </div>
              <div className="bg-Grey__textSmall">
                <p className="bg-title2 bg-img__3 bg-after__arrow">Fully encrypted</p>
              </div>
              <div className="bg-Grey__textSmall">
                <p className="bg-title2 bg-img__4 bg-after__arrow">Plenty of options</p>
              </div>
            </div>

            
          </div>
          <div className="bg-Grey__contentImg">
            <div className="computer">
              <img src={computer} alt="computer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1;