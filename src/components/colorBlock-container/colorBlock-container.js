
import "./colorBlock-container.css";


const ColorBlock = ({ classblock, classimg, img, title, text }) => {
    return (
        <div className={classblock}>
            <div className={classimg}>
                <img src={img} alt={img} />
            </div>
            <p className="blockArticle">{title}</p>
            <p className="colorBlock-text">
                {text}
            </p>
        </div>
    )
}

export default ColorBlock;