import './Page2.css'

const Page2 = () => {
  return (
    <div className="containerS ">
      <div className="whatsAbout__title">
        <p className="whatsAbout__title-title">
          What's Whirl all about?
        </p>

        <div className="whatsAbout__text">
          <div className="whatsAbout__textColumn0">
            <p className="whatsAbout__textTitle">All on one place.</p>
            <p className="whatsAbout__textMain">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="whatsAbout__textColumn">
            <p className="whatsAbout__textTitle imgBefore1">Get daily alerts.</p>
            <p className="whatsAbout__textMain">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="whatsAbout__textColumn">
            <p className="whatsAbout__textTitle imgBefore2">Safe and secure.</p>
            <p className="whatsAbout__textMain">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;