import './newslatter.css';


const News = () => {
    return (
        <div className="newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-title">Sign up for the latest news,
                company insights,
                and Whirl updates.</p>
            <div className="footer__btn">
                <form method="post" className="new_form" id="form">
                    <input type="email" name="login" placeholder="Your email:" class="email" required />
                    <input type="submit" id="submit" value=">" />
                </form>
                <div className="lineEmail"></div>
            </div>
        </div>
    )
}

export default News;