import classes from "./Welcome.module.css";
import WelcomeImage from "../../assets/welcome.webp";

const Welcome = () => {
    return (
        <>
        <section className={classes["welcome-section"]}>
            <img className={classes["welcome-image"]} src={WelcomeImage} alt="Welcome to Litho Cafe & Restaurant"/>
            <div className={classes["welcome-text"]}>
                <h3>WELCOME TO LITHO <strong>CAFE & RESTURANT</strong></h3>
                <p className={classes.subtitle}>One should not attend even the end of the world without a good breakfast</p>
                <p className={classes.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui totam at quas odit ab minima quae odio et dolorum neque facilis quos quisquam porro.</p>
                <button>EXPLORE MORE</button>
            </div>
        </section>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi consequatur debitis voluptatibus ratione, nisi dolorem quaerat soluta velit. Laborum mollitia maxime dicta dolores sint eveniet cum tempore culpa, consequuntur sunt magni perferendis quis perspiciatis tempora, blanditiis, repellendus laboriosam suscipit ipsa distinctio at hic optio eligendi. Blanditiis modi a explicabo quae, quod aspernatur veniam ex harum. Numquam, assumenda. Iusto tempora voluptas repudiandae rerum corporis sint assumenda voluptatibus omnis facere atque nesciunt necessitatibus, nemo quasi nobis, officiis earum! Veritatis maxime vero suscipit, pariatur impedit quibusdam quam. Laborum ratione placeat itaque alias iusto enim accusantium modi, perferendis animi, dolorum voluptas, optio quisquam?</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi consequatur debitis voluptatibus ratione, nisi dolorem quaerat soluta velit. Laborum mollitia maxime dicta dolores sint eveniet cum tempore culpa, consequuntur sunt magni perferendis quis perspiciatis tempora, blanditiis, repellendus laboriosam suscipit ipsa distinctio at hic optio eligendi. Blanditiis modi a explicabo quae, quod aspernatur veniam ex harum. Numquam, assumenda. Iusto tempora voluptas repudiandae rerum corporis sint assumenda voluptatibus omnis facere atque nesciunt necessitatibus, nemo quasi nobis, officiis earum! Veritatis maxime vero suscipit, pariatur impedit quibusdam quam. Laborum ratione placeat itaque alias iusto enim accusantium modi, perferendis animi, dolorum voluptas, optio quisquam?</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi consequatur debitis voluptatibus ratione, nisi dolorem quaerat soluta velit. Laborum mollitia maxime dicta dolores sint eveniet cum tempore culpa, consequuntur sunt magni perferendis quis perspiciatis tempora, blanditiis, repellendus laboriosam suscipit ipsa distinctio at hic optio eligendi. Blanditiis modi a explicabo quae, quod aspernatur veniam ex harum. Numquam, assumenda. Iusto tempora voluptas repudiandae rerum corporis sint assumenda voluptatibus omnis facere atque nesciunt necessitatibus, nemo quasi nobis, officiis earum! Veritatis maxime vero suscipit, pariatur impedit quibusdam quam. Laborum ratione placeat itaque alias iusto enim accusantium modi, perferendis animi, dolorum voluptas, optio quisquam?</div>
        </>
    );
}

export default Welcome;