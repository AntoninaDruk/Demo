
import "./colorBlock-container.css";


const ColorBlock = ({ classblock, classimg, img, title, text }) => {
    return (
        <div class={classblock}>
            <div class={classimg}>
                <img src={img} alt={img} />
            </div>
            <p class="blockArticle">{title}</p>
            <p class="colorBlock-text">
                {text}
            </p>
        </div>
    )
}

export default ColorBlock;