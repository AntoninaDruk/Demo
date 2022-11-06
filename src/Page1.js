import computer from "./Images/computer.png";
import './Page1.css'

const Page1 = () => {
  return (
    <div className="bg-Grey">
    <div className="containerColor-Block container">
      <div className="bg-Grey__content">
        <div className="bg-Grey__contentText">
          <p className="bg-Grey_textBig">
            We will take care of everything, <br />
            so you can get back to relaxing.
          </p>
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