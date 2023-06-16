import classes from "./Welcome.module.css";
import WelcomeImage from "../../assets/welcome.webp";

const Welcome = () => {
    return (
        <section className={classes["welcome-section"]}>
            <img className={classes["welcome-image"]} src={WelcomeImage} alt="Welcome to Litho Cafe & Restaurant"/>
            <div className={classes["welcome-text"]}>
                <h3>WELCOME TO LITHO <strong>CAFE & RESTURANT</strong></h3>
                <p className={classes.subtitle}>One should not attend even the end of the world without a good breakfast</p>
                <p className={classes.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui totam at quas odit ab minima quae odio et dolorum neque facilis quos quisquam porro.</p>
                <button>EXPLORE MORE</button>
            </div>
        </section>
    );
}

export default Welcome;