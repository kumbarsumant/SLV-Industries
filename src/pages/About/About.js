import styles from "./About.module.css";
// import INDUSTRY_IMAGE from "../../images/industry.png";

const INDUSTRY_IMAGE = process.env.PUBLIC_URL + "/images/industry.png";

function About() {
    return (
        <section id="about" className="section">
            <div className="section-container">
                <h2 className="heading-secondary heading-gradient margin-bottom-lg">
                    About SLV Industries
                </h2>
                <div className={styles.container}>
                    <div className={`${styles.column} ${styles.columnText}`}>
                        <h3 className="heading-tertiary margin-bottom-sm">
                            SLV Industries: Pioneering Sustainable Dining with
                            Eco-Friendly Paper Plates
                        </h3>
                        <p className="paragraph margin-bottom-sm">
                            Innovating eco-friendly paper plates, SLV Industries
                            stands at the forefront of sustainable dining
                            solutions. Our commitment to environmental
                            stewardship drives us to produce biodegradable and
                            disposable paper plates, offering both convenience
                            and a green conscience.
                        </p>
                        <p className="paragraph  margin-bottom-sm">
                            As a leading manufacturer nestled in the heart of
                            Karnataka, SLV Industries prioritizes environmental
                            sustainability and quality in every aspect of our
                            operations. Our facility is dedicated to crafting
                            tableware solutions that not only meet but exceed
                            eco-conscious standards.
                        </p>
                        <p className="paragraph">
                            At SLV Industries, we recognize the importance of
                            responsible choices in shaping a greener future.
                            Join us in embracing sustainability as we provide
                            you with disposable tableware that harmonizes
                            convenience with environmental respect. Choose SLV
                            Industries for plates that contribute to a healthier
                            planet and a brighter tomorrow.
                        </p>
                    </div>
                    <div className={`${styles.column} ${styles.columnImg}`}>
                        <img
                            className={styles.img}
                            src={INDUSTRY_IMAGE}
                            alt="SLV-Industry"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
